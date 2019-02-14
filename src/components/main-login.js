import {createMixin} from '../../node_modules/polymer-redux';
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {translations} from '../translations/languages.js';
import store from '../global/store.js';
import '../css/shared-styles.js';
import '../components/loading/loading-circular.js';

const ReduxMixin = createMixin(store);
class MainLogin extends ReduxMixin(PolymerElement) {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          color: var(--host-color);
        }
        input {
          width:100%;
          max-width: 280px;
          padding: 8px;
          display: block;
          overflow: hidden;
          color: var(--input-color);
          line-height: 17px;
          border: 1px solid var(--border-color);
          border-radius: 3px;
          font-size: 14px;
          font-weight: 400;
          background: var(--input-background);
        }
        input:focus {
          outline: 0;
          border: 1px solid var(--active-color);
          box-shadow: none;
        }
        label {
          margin: 16px 0 6px 0px;
          display: block;
          font-weight:500;
          font-size:14px;
        }
        h1 {
          font-size: 35px;
          font-weight: 300;
          margin-top: 0px;
        }
        small {
          margin: 6px 0 0 0;
          font-size: 12px;
          display: block;
          color: var(--grey-color);
          line-height: 1.5em;
        }
        .value {
          margin-bottom: 50px;
          line-height: 1.5em;
        }
        .btn-login{
          display: block;
          width: 100%;
          font-weight: bold;
          padding: 0 12px;
          line-height: 36px;
          font-size: 14px;
          border: 1px solid;
          border-radius: 3px;
          color: var(--btn-text);
          text-shadow: 0 1px 0 var(--btn-top);
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
          border-color: var(--btn-border);
          background: var(--btn-bottom);
          background: -webkit-linear-gradient(top, var(--btn-top), var(--btn-bottom));
          background: -ms-linear-gradient(top, var(--btn-top), var(--btn-bottom));
          background: -moz-linear-gradient(top, var(--btn-top), var(--btn-bottom));
          background: -o-linear-gradient(top, var(--btn-top), var(--btn-bottom));
          margin: 12px 0 24px 0;
          cursor: pointer;
        }
        a {
          color: var(--active-color);
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
        .issue {
          color: #B50000;

        }
        button:focus {
          outline:0;
        }
        .error{
          border: 1px solid #B50000;
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

        <h1>[[txt.login]]</h1>
        <p class="value">[[txt.welcomeBack]] [[env.siteName]]</p>
        <div class="area">

        <p>
          <label for="email">[[txt.email]]</label>
          <input type="email" name="email" id="email" on-keydown="_email" value="{{email::input}}" required>
          <small class="issue">[[issueEmail]]</small>
        </p>
        <p>
          <label for="password">[[txt.password]]</label>
          <input type="password" name="password" id="password" on-keydown="_password" value="{{password::input}}" required>
          <template is="dom-if" if="{{!issuePassword}}"><small>[[txt.passwordLength]]</small></template>
          <small class="issue">[[issuePassword]]</small>
        </p>
        <button class="btn-login" on-click="_join">[[txt.login]]</button>
        <center><p class="inline-flex">[[txt.dontHaveAccount]] &nbsp; <a href="/join/" class="mobile-link-join">[[txt.join]] [[env.siteName]]</a> <a on-click="_join" class="desktop-link-join">[[txt.join]] [[env.siteName]]</a></p></center>
        </div>
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

  _join() {
    this.dispatchEvent(new CustomEvent('modal', {bubbles: true, composed: true, detail: {action: 'join', language: this.language}}));
  }

  _login() {
    const email = this.email;
    const password = this.password;

    this.shadowRoot.querySelector('#email').classList.remove('error');
    this.shadowRoot.querySelector('#password').classList.remove('error');

    this.issueEmail = '';
    this.issuePassword = '';

    if (!email) {
      this.issueEmail = 'Enter your email';
      this.shadowRoot.querySelector('#email').classList.add('error');
    }
    if (!password) {
      this.issuePassword = 'Enter your password';
      this.shadowRoot.querySelector('#password').classList.add('error');
    }
    if (password && password.length < 6) {
      this.issuePassword = 'Passwords must be at least 6 characters.';
      this.shadowRoot.querySelector('#password').classList.add('error');
    }

    if (password && password.length >= 6 && email) {
      const url = `${this.env.apiUrl}/guest/login/`;
      if (localStorage.getItem('language') === null) {
        localStorage.setItem('language', 'English');
      }
      const language = localStorage.getItem('language');
      const data = {name, email, password, language};
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'},
      })
          .then((response) => {
            return response.json();
          })
          .then((response) => {
            localStorage.setItem('jwt', response.jwt);
            // TODO: hide modal set state to logged in
          })
          .catch((error) => console.log('Error:', error));
    }
  }

  _focusEmail() {
    setTimeout(() => {
      this.shadowRoot.querySelector('#email').focus();
    }, 10);
  }

  _email(e) {
    if (e.keyCode === 13) {
      this.shadowRoot.querySelector('#password').focus();
    }
  }
  _password(e) {
    if (e.keyCode === 13) {
      this._login();
    }
  }

  _language(e) {
    this.txt = translations[this.language];
  }

  _mode() {
    this.updateStyles({'--active-color': this.color.blue});
    this.updateStyles({'--grey-color': this.color.grey});
    this.updateStyles({'--error-color': this.color.red});
    this.updateStyles({'--green-color': this.color.green});
    if (this.mode === 'light') {
      this.updateStyles({'--input-background': this.color.white2});
      this.updateStyles({'--border-color': this.color.white3});
      this.updateStyles({'--input-color': this.color.black1});
      this.updateStyles({'--host-color': this.color.black2});
      this.updateStyles({'--btn-top': this.color.white1});
      this.updateStyles({'--btn-bottom': this.color.white2});
      this.updateStyles({'--btn-border': this.color.white3});
      this.updateStyles({'--btn-text': this.color.black3});
    } else {
      this.updateStyles({'--input-background': this.color.black1});
      this.updateStyles({'--border-color': this.color.black3});
      this.updateStyles({'--input-color': this.color.white1});
      this.updateStyles({'--host-color': this.color.white2});
      this.updateStyles({'--btn-top': this.color.black3});
      this.updateStyles({'--btn-bottom': this.color.black1});
      this.updateStyles({'--btn-border': this.color.black1});
      this.updateStyles({'--btn-text': this.color.white2});
    }
  }
} window.customElements.define('main-login', MainLogin);
