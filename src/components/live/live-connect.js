
import {createMixin} from '../../../node_modules/polymer-redux';
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import store from '../../global/store.js';
import '@polymer/app-route/app-location.js';

const ReduxMixin = createMixin(store);
class LiveConnect extends ReduxMixin(PolymerElement) {
  static get properties() {
    return {
      connect: {
        type: Boolean,
        value: false,
        observer: '_connect',
      },
      messages: {
        type: Array,
        readOnly: true,
      },
      notifications: {
        type: Array,
        readOnly: true,
      },
    };
  }

  static get template() {
    return html `
      <audio id="audio" src="../../audio/whoosh.mp3"></audio>
    `;
  }


  static mapStateToProps(state, element) {
    return {
      language: state.language,
      mode: state.mode,
      color: state.color,
      messages: state.messages,
      notifications: state.notifications,
    };
  }

  ready() {
    super.ready();
    window.addEventListener('sendMessage', (e) => {
      const username = e.detail.username;
      const message = e.detail.message;
      this._sendMessage(username, message);
    });
    window.addEventListener('getConversation', (e) => {
      const conversationId = e.detail.conversationId;
      this._getConversation(conversationId);
    });
    window.addEventListener('logOut', () => {
      this._logout();
    });
  }

  _connect() {
    let lastConversation = 0;
    const conversations = JSON.parse(localStorage.getItem('conversations'));
    if (conversations) {
      for (let i = 0, len = conversations.length; i < len; i++) {
        if (conversations[i].lastMessage.datetime > lastConversation) {
          lastConversation = conversations[i].lastMessage.datetime;
        }
      }
    }
    this.jwt = localStorage.getItem('jwt');
    this.socket = io('https://ozark-chat-api.herokuapp.com', {query: `jwt=${this.jwt}&lastConversation=${lastConversation}`});
    this.socket.on('connect', () => {
      this.socket.on('conversations', (data) => {
        console.log(data);
        this._conversations(data);
      });
      this.socket.on('notifcations', (data) => {
        this._incomingNotifications(data);
      });
      this.socket.on('conversationId', (data) => {
        this._incomingConversation(data);
      });
    });
  }

  _conversations(conversations) {
    if (localStorage.getItem('conversations')) {
      const existingConversations = JSON.parse(localStorage.getItem('conversations'));
      const mappedExisting = existingConversations.map((e) => {
        return e.conversationId;
      });
      const mappedIncoming = conversations.map((f) => {
        return f.conversationId;
      });
      for (let i = 0; i < mappedIncoming.length; i++) {
        if (mappedExisting.indexOf(mappedIncoming[i]) < 0) {
          existingConversations.push(conversations[i]);
        }
      }
      localStorage.setItem('conversations', JSON.stringify(existingConversations));
      this.dispatchAction({
        type: 'CHANGE_CONVERSATIONS',
        conversations: JSON.stringify(existingConversations),
      });
    } else {
      localStorage.setItem('conversations', JSON.stringify(conversations));
      this.dispatchAction({
        type: 'CHANGE_CONVERSATIONS',
        conversations: JSON.stringify(conversations),
      });
    }
    this.$.audio.play();
  }

  _incomingNotifications(notification) {
    const notifications = this.notifications;
    notifications.push(notification);
    this.dispatchAction({
      type: 'CHANGE_NOTIFICATIONS',
      notifications: notifications,
    });
  }

  _incomingConversation(conversation) {
    console.log(conversation);
  }

  _getConversation(conversationId) {
    this.socket.emit('conversationId', {conversationId});
  }

  _sendMessage(username, message) {
    if (this.socket.connected) {
      this.socket.emit('newconvo', {username, message});
    }
  }
  _logout() {
    this.socket.disconnect(true);
  }
} window.customElements.define('live-connect', LiveConnect);
