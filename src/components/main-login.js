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
          <template is="dom-if" if="{{issuePassword}}"><small class="issue">[[issuePassword]]</small></template>
        </p>
        <button class="modal-btn" on-click="_login">[[txt.login]]</button>
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
      this.issueEmail = this.txt.enterYourEmail;
      this.shadowRoot.querySelector('#email').classList.add('error');
    }
    if (!password) {
      this.issuePassword = this.txt.enterYourPassword;
      this.shadowRoot.querySelector('#password').classList.add('error');
    }
    if (password && password.length < 6) {
      this.issuePassword = this.txt.passwordLength;
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
            const tempFullname = response.name.split(' ');
            console.log('tempFullname');
            console.log(tempFullname);
            let fullname = '';
            if (tempFullname) {
              fullname = tempFullname[0];
            } else {
              fullname = response.name;
            }
            console.log(fullname);
            localStorage.setItem('fullname', fullname);
            localStorage.setItem('jwt', response.jwt);
            localStorage.setItem('id', response.id);
            localStorage.setItem('loggedin', true);
            this.dispatchEvent(new CustomEvent('hideModal', {bubbles: true, composed: true, detail: {action: 'hideModal'}}));
            this.dispatchAction({
              type: 'CHANGE_NAME',
              fullname: fullname,
            });
            this.dispatchAction({
              type: 'CHANGE_STATUS',
              loggedin: true,
            });
            this.dispatchAction({
              type: 'CHANGE_USERID',
              userid: response.id,
            });
          })
          .catch((error) => console.log('Error:', error));
    }
  }

  _focusEmail() {
    this._requestCredential();
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

  _requestCredential() {
    const mediationValue = 'required';
    navigator.credentials.get({password: true, mediation: mediationValue})
        .then((credential) => {
          if (credential) {
            this.email = credential.id;
            this.password = credential.password;
            this._login();
          }
        })
        .catch((err) => log('Error reading credentials: ' + err));
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
} window.customElements.define('main-login', MainLogin);
