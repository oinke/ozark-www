
import {createMixin} from '../../../node_modules/polymer-redux';
import {PolymerElement} from '@polymer/polymer/polymer-element.js';
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
    this.jwt = localStorage.getItem('jwt');
    this.socket = io('https://ozark-chat-api.herokuapp.com', {query: `jwt=${this.jwt}`});
    this.socket.on('connect', () => {
      this.socket.on('message', (data) => {
        this._incomingMessages(data);
      });
      this.socket.on('notifcations', (data) => {
        this._incomingNotifications(data);
      });
    });
  }

  _incomingMessages(message) {
    const messages = this.messages;
    messages.push(message);
    this.dispatchAction({
      type: 'CHANGE_MESSAGES',
      messages: messages,
    });
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


