
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
    window.addEventListener('logOut', () => {
      this._logout();
    });
  }

  _connect() {
    let lastMessage = 0;
    const messages = JSON.parse(localStorage.getItem('messages'));
    if (messages) {
      for (let i = 0, len = messages.length; i < len; i++) {
        if (messages[i].datetime > lastMessage) {
          lastMessage = messages[i].datetime;
        }
      }
    }
    this.jwt = localStorage.getItem('jwt');
    this.socket = io('https://ozark-chat-api.herokuapp.com', {query: `jwt=${this.jwt}&lastMessage=${lastMessage}`});
    this.socket.on('connect', () => {
      this.socket.on('message', (data) => {
        console.log(data);
        this._incomingMessages(data);
      });
      this.socket.on('notifcations', (data) => {
        this._incomingNotifications(data);
      });
    });
  }

  _incomingMessages(incomingMessages) {
    if (localStorage.getItem('messages')) {
      const existingMessages = JSON.parse(localStorage.getItem('messages'));
      const mappedExisting = existingMessages.map(function(e) {
        return e._id;
      });
      const mappedIncoming = incomingMessages.map(function(f) {
        return f._id;
      });
      for (let i = 0; i < mappedIncoming.length; i++) {
        if (mappedExisting.indexOf(mappedIncoming[i]) < 0) {
          existingMessages.push(incomingMessages[i]);
        }
      }
      localStorage.setItem('messages', JSON.stringify(existingMessages));
      this.dispatchAction({
        type: 'CHANGE_MESSAGES',
        messages: JSON.stringify(existingMessages),
      });
    } else {
      localStorage.setItem('messages', JSON.stringify(incomingMessages));
      this.dispatchAction({
        type: 'CHANGE_MESSAGES',
        messages: JSON.stringify(incomingMessages),
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

  _sendMessage(username, message) {
    if (this.socket.connected) {
      this.socket.emit('message', {username, message});
    }
  }
  _logout() {
    this.socket.disconnect(true);
  }
} window.customElements.define('live-connect', LiveConnect);
