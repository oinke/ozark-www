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
        .conversation {
          display: flex;
          margin: 12px 0;
        }
        .conversation-avatar {
          flex: 1;
          max-width: 40px;
        }
        .conversation-details {
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
        .input:focus, .input {
          outline: none !important;
        }
        .conversation{
          cursor: pointer;
        }

      </style>

      <div class="max-height" id="scrollBox">
        <template is='dom-repeat' items='[[conversationsDisaply]]'>

          <div class="conversation" id="[[item.conversationId]]" on-click='_openConversation'>
            <template is='dom-repeat' items='[[item.participantIds]]'>
              <div class="conversation-avatar">
                <img class="avatar" src='https://s3-us-west-1.amazonaws.com/ozark/[[item.userId]]/pfp_200x200.jpg?versionId=null'>
              </div>
            </template>
            <div class="conversation-details">
              <p class="name">
              
              <template is='dom-repeat' items='[[item.participantIds]]'>
              @[[item.username]] 
              </template>
              
              <span>[[item.lastMessage.datetime]]</span></p>
              <p class="message-text">[[item.lastMessage.fromUser]]: [[item.lastMessage.message]]</p>
            </div>
          </div>

        </template>
      </div>

        <div contenteditable="true" class="input" id="input" on-focus="_hideMessage" on-keydown="_hideMessage" on-keyup="_showMessage">Send a message</div>
      <!-- <input name="message" type="text" class="text" id="message" value="{{message::input}}" placeholder="Send a message"> -->


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
      color: {
        type: Object,
        readOnly: true,
      },
      loggedin: {
        type: Boolean,
        readOnly: true,
      },
      conversations: {
        type: String,
        observer: '_conversations',
      },
      conversationsDisaply: {
        type: Array,
        value: [],
      },
      keyHistory: {
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
      conversations: state.conversations,
    };
  }
  _openConversation(e) {
    const conversationId = e.model.__data.item.conversationId;
    this.dispatchEvent(new CustomEvent('getConversation', {bubbles: true, composed: true, detail: {conversationId: conversationId}}));
  }
  _hideMessage(e) {
    this.message = this.$.input.innerText;
    this.keyHistory.push(e.keyCode);
    // TODO make sure this doesnt get longer than 2 items
    if (this.$.input.innerText === 'Send a message') {
      this.$.input.innerText = '';
    };
    console.log(e.keyCode);
    if (e.keyCode === 13 && this.message.length > 0) {
      e.preventDefault();
      this._sendMessage();
    }
  }
  _showMessage() {
    if (this.$.input.innerText === '') {
      this.$.input.innerText = 'Send a message';
    };
  }
  _conversations() {
    if (this.conversations) {
      this.conversationsDisaply = JSON.parse(this.conversations);
      setTimeout(() => {
        const objDiv = this.shadowRoot.querySelector('#scrollBox');
        objDiv.scrollTop = objDiv.scrollHeight;
      }, 30);
    }
  }

  _sendMessage() {
    console.log('dispatching message');
    this.dispatchEvent(new CustomEvent('sendMessage', {bubbles: true, composed: true, detail: {username: 'colinskeep83112', message: this.message}}));
  }
} window.customElements.define('live-messages', LiveMessages);
