import {createMixin} from '../../../node_modules/polymer-redux';
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import store from '../../global/store.js';
import '../../css/shared-styles.js';

const ReduxMixin = createMixin(store);
class LiveMessages extends ReduxMixin(PolymerElement) {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          background-color: var(--header-background-color);
          box-shadow: inset 0 1px 0 var(--header-background-color), 0 1px 0px rgba(0,0,0,0.08), 0 2px 2px rgba(0,0,0,0.05);
          z-index: 8888;
          padding: 12px;
        }
        input {
            border: 1px solid black;
        }
      </style>

      <template is='dom-repeat' items='[[messageDisaply]]'>
        <p>@[[item.fromUser]] [[item.time]]</p>
        <p>[[item.message]]</p>
        <hr/>
      </template>

      <label>Username</label><br>
      <input name="username" type="text" class="text" id="username" value="{{username::input}}">
      <label>Message</label><br>
      <input name="message" type="text" class="text" id="message" value="{{message::input}}">
      </br>
      <button class="flat-btn" type="button" on-click="_sendMessage">Send Message</button>

    `;
  }

  static get properties() {
    return {
      siteName: {
        type: Text,
      },
      logoWidth: {
        type: Number,
        observer: '_logoSize',
      },
      logoHeight: {
        type: Number,
        observer: '_logoSize',
      },
      mode: {
        type: Text,
        readOnly: true,
        observer: '_mode',
      },
      color: {
        type: Object,
        readOnly: true,
      },
      loggedin: {
        type: Boolean,
        readOnly: true,
      },
      messages: {
        type: String,
        observer: '_messages',
      },
      messageDisaply: {
        type: Array,
        value: [],
      },
    };
  }

  static mapStateToProps(state, element) {
    return {
      mode: state.mode,
      color: state.color,
      loggedin: state.loggedin,
      messages: state.messages,
    };
  }

  _messages() {
    console.log('messages recieved');
    console.log(this.messages);
    if (this.messages) {
      this.messageDisaply = JSON.parse(this.messages);
    }
  }

  _sendMessage() {
    console.log('dispatching message');
    this.dispatchEvent(new CustomEvent('sendMessage', {bubbles: true, composed: true, detail: {username: this.username, message: this.message}}));
  }

  _mode() {
    // if (this.mode === 'light') {
    //   this.updateStyles({'--header-background-color': this.color.white1});
    //   this.updateStyles({'--host-logo': `url(./images/light-logo.svg) no-repeat`});
    //   this.updateStyles({'--hover-background': this.color.white2});
    // } else {
    //   this.updateStyles({'--header-background-color': this.color.black2});
    //   this.updateStyles({'--host-logo': `url(./images/dark-logo.svg) no-repeat`});
    //   this.updateStyles({'--hover-background': this.color.black1});
    // }
  }
} window.customElements.define('live-messages', LiveMessages);
