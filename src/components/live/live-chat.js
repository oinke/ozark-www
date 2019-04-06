import {createMixin} from '../../../node_modules/polymer-redux';
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import store from '../../global/store.js';
import '../../css/shared-styles.js';

const ReduxMixin = createMixin(store);
class LiveChat extends ReduxMixin(PolymerElement) {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: box;
          background-color: var(--header-background-color);
          box-shadow: inset 0 1px 0 var(--header-background-color), 0 1px 0px rgba(0,0,0,0.08), 0 2px 2px rgba(0,0,0,0.05);
          z-index: 8888;
        }
        input{
            border: 1px solid black;
        }
      </style>

      <label for="username">Username</label><br>
      <input name="username" id="username" value="{{username::input}}">
      <label for="message">Message</label><br>
      <input name="message" id="message" value="{{message::input}}">
      </br>
      <button type="button" on-click="_sendMessage">Send</button>

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
    };
  }

  static mapStateToProps(state, element) {
    return {
      mode: state.mode,
      color: state.color,
      loggedin: state.loggedin,
    };
  }

  _sendMessage() {
    console.log('Send Message');
    this.dispatchEvent(new CustomEvent('sendMessage', {bubbles: true, composed: true, detail: {username: this.username, message: this.message}}));
  }

  _mode() {
    if (this.mode === 'light') {
      this.updateStyles({'--header-background-color': this.color.white1});
      this.updateStyles({'--host-logo': `url(./images/light-logo.svg) no-repeat`});
      this.updateStyles({'--hover-background': this.color.white2});
    } else {
      this.updateStyles({'--header-background-color': this.color.black2});
      this.updateStyles({'--host-logo': `url(./images/dark-logo.svg) no-repeat`});
      this.updateStyles({'--hover-background': this.color.black1});
    }
  }
} window.customElements.define('live-chat', LiveChat);
