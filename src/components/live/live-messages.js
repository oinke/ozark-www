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
        .max-height {
          max-height: 500px;
          overflow: scroll;
        }
        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 6px;
        }
        .message {
          display: flex;
          margin: 12px 0;
        }
        .message-avatar {
          flex: 1;
          max-width: 40px;
        }
        .message-details {
          flex: 1;
          padding-left: 12px;
        }
        .name{
          font-size: 16px;
          font-weight: 700;
          margin: 0px;
        }
        .name span {
          font-size: 12px;
          font-weight: 400;
        }
        .message-text{
          margin: 0px;
          font-size: 14px;
          padding-top: 6px;
        }

      </style>

      <div class="max-height" id="scrollBox">
        <template is='dom-repeat' items='[[messageDisaply]]'>

          <div class="message">
            <div class="message-avatar">
              <img class="avatar" src='https://s3-us-west-1.amazonaws.com/ozark/[[item.fromUserId]]/pfp_200x200.jpg?versionId=null'>
            </div>
            <div class="message-details">
              <p class="name">@[[item.fromUser]] <span>[[item.datetime]]</span></p>
              <p class="message-text">[[item.message]]</p>
            </div>
          </div>

        </template>
      </div>

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
    if (this.messages) {
      this.messageDisaply = JSON.parse(this.messages);
      setTimeout(() => {
        const objDiv = this.shadowRoot.querySelector('#scrollBox');
        objDiv.scrollTop = objDiv.scrollHeight;
      }, 30);
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
