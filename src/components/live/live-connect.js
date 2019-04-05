
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
    };
  }

  static mapStateToProps(state, element) {
    return {
      language: state.language,
      mode: state.mode,
      color: state.color,
    };
  }

  _connect() {
    this.jwt = localStorage.getItem('jwt');
    this.socket = io('https://ozark-chat-api.herokuapp.com', {query: `jwt=${this.jwt}`});
    this.socket.on('connect', () => {
      this._sendMessage('colinskeep83112', 'chat', 'hello');
      this.socket.on('chat', (data) => {
        this._incomingChat(data);
      });
      this.socket.on('notifcations', (data) => {
        this._incomingNotifications(data);
      });
    });
  }
  _incomingChat(message) {
    console.log(message);
  }
  _incomingNotifications(message) {
    console.log(message);
  }
  _sendMessage(username, type, message) {
    if (this.socket.connected) {
      this.socket.emit(type, {username, type, message});
    }
  }
} window.customElements.define('live-connect', LiveConnect);


