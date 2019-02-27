import {createMixin} from '../../node_modules/polymer-redux';
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {translations} from '../translations/languages.js';
import store from '../global/store.js';
import '../css/shared-styles.js';
import '../components/loading/loading-circular.js';

const ReduxMixin = createMixin(store);
class MainFeedback extends ReduxMixin(PolymerElement) {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          color: var(--white2-black2);
        }
        h1 {
          font-size: 35px;
          font-weight: 300;
          margin-top: 0px;
        }
        .value {
          margin-bottom: 50px;
          line-height: 1.5em;
        }
        a {
          color: var(--blue-color);
          text-decoration: none;
        }
        center {
          color: var(--grey-color);
          text-decoration: none;
          margin-top:36px;
        }
        center a {
          font-weight: 500;
        }
        .area {
          display: block;
          max-width: 300px;
        }
        loading-circular{
          padding-top: 170px;
        }
        .resend-code{
          margin-bottom: 30px;
          display: block;
        }
        .resent {
          color: var(--green-color);
        }
        .desktop-link-join{
            display:none;
        }
        .inline-flex{
          display: inline-flex;
        }
        @media screen and (min-width: 900px){
          .mobile-link-join{
            display:none;
          }
          .desktop-link-join{
            display:block;
            cursor: pointer;
          }
        } 
      </style>

      <template is="dom-if" if="{{!thanks}}">
        <h1>Send Feeback</h1>
        <p class="value">Share your ideas or describe your issue</p>
        <div class="area">

        <p>
          <label for="email">Message</label>
          <textarea rows="8" name="email" id="message" on-keydown="_sendMessage" value="{{message::input}}" required></textarea>
          <small class="issue">[[issueMessage]]</small>
        </p>
        <button class="modal-btn" on-click="_send">Send</button>
        <center><p class="inline-flex">Your feedback is important to us.</p></center>
        </div>
      </template>

      <template is="dom-if" if="{{thanks}}">
        <h1>Thank you for your valuable feedback!</h1>
        <p class="value">We read every single comment and we are constantly improving.</p>
        <div class="area">
        <button class="modal-btn" on-click="_close">Close</button>
        </div>
      </template>
    `;
  }

  static get properties() {
    return {
      language: {
        type: Text,
        readOnly: true,
        observer: '_language',
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
      env: {
        type: Object,
        readOnly: true,
      },
      issue: {
        type: Object,
      },
      focus: {
        type: Boolean,
        value: true,
        observer: '_focusEmail',
      },
      thanks: {
        type: Boolean,
        value: false,
      },
    };
  }

  static mapStateToProps(state, element) {
    return {
      language: state.language,
      mode: state.mode,
      color: state.color,
      env: state.env,
    };
  }

  _close() {
    this.thanks = false;
    this.dispatchEvent(new CustomEvent('hideModal', {bubbles: true, composed: true, detail: {action: 'hideModal'}}));
  }
  _send() {
    const message = this.message;
    this.shadowRoot.querySelector('#message').classList.remove('error');
    this.issueMessage = '';

    if (!message) {
      this.issueEmail = 'Please ener a message';
      this.shadowRoot.querySelector('#message').classList.add('error');
    }


    if (message && message.length >= 6) {
      const url = `${this.env.apiUrl}/users/feedback/`;
      const token = localStorage.getItem('jwt');
      const data = {message};
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json'},
      })
          .then((response) => {
            return response.json();
          })
          .then((response) => {
            this.thanks = true;
          })
          .catch((error) => console.log('Error:', error));
    }
  }

  _sendMessage(e) {
    if (e.keyCode === 13) {
      this._send();
    }
  }

  _language(e) {
    this.txt = translations[this.language];
  }

  _mode() {
    this.updateStyles({'--blue-color': this.color.blue});
    this.updateStyles({'--grey-color': this.color.grey});
    this.updateStyles({'--red-color': this.color.red});
    this.updateStyles({'--green-color': this.color.green});
    if (this.mode === 'light') {
      this.updateStyles({'--black3-white3': this.color.white3});
      this.updateStyles({'--white1-black1': this.color.black1});
      this.updateStyles({'--white2-black2': this.color.black2});
      this.updateStyles({'--black3-white1': this.color.white1});
      this.updateStyles({'--black1-white2': this.color.white2});
      this.updateStyles({'--black1-white3': this.color.white3});
      this.updateStyles({'--white2-black3': this.color.black3});
    } else {
      this.updateStyles({'--black3-white3': this.color.black3});
      this.updateStyles({'--white1-black1': this.color.white1});
      this.updateStyles({'--white2-black2': this.color.white2});
      this.updateStyles({'--black3-white1': this.color.black3});
      this.updateStyles({'--black1-white2': this.color.black1});
      this.updateStyles({'--black1-white3': this.color.black1});
      this.updateStyles({'--white2-black3': this.color.white2});
    }
  }
} window.customElements.define('main-feedback', MainFeedback);
