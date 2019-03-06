import {createMixin} from '../../node_modules/polymer-redux';
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {translations} from '../translations/languages.js';
import store from '../global/store.js';
import '../css/shared-styles.js';

const ReduxMixin = createMixin(store);
class MainJoin extends ReduxMixin(PolymerElement) {
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
        .resend-code{
          margin-bottom: 30px;
          display: block;
        }
        .resent {
          color: var(--green-color);
        }
        .desktop-link-login{
          display: none;
        }
        .inline-flex{
          display: inline-flex;
        }
        @media screen and (min-width: 900px){
          .mobile-link-login{
            display: none;
          }
          .desktop-link-login{
            display: block;
            cursor: pointer;
          }
        } 
      </style>
      <template is="dom-if" if="{{!sent}}">
        <h1>[[txt.join]] [[env.siteName]]</h1>
        <p class="value">[[txt.value]]</p>
        <div class="area">
          <form id="form"> 
            <p>
              <label for="name">[[txt.yourName]]</label>
              <input type="text" name="name" id="name" on-keydown="_yourName" value="{{name::input}}" required>
              <small class="issue">[[issueName]]</small>
            </p>
            <p>
              <label for="email">[[txt.email]]</label>
              <input type="email" name="email" id="email" on-keydown="_email" value="{{email::input}}" required autocomplete="username">
              <small class="issue">[[issueEmail]]</small>
            </p>
            <p>
              <label for="password">[[txt.password]]</label>
              <input type="password" name="password" id="password" on-keydown="_password" value="{{password::input}}" required autocomplete="current-password">
              <template is="dom-if" if="{{issuePassword}}"><small>[[txt.passwordLength]]</small></template>
              <small class="issue">[[issuePassword]]</small>
            </p>
            <p>
              <label for="repassword">[[txt.reEnterPassword]]</label>
              <input type="password" name="repassword" id="repassword" on-keydown="_reEnter" value="{{confirmPassword::input}}" required>
              <small class="issue">[[issueConfirmPassword]]</small>
            </p>
            <button class="modal-btn" on-click="_join">[[txt.join]]</button>
            <small>[[txt.byJoining]] [[env.siteName]] <a href="/help/terms/">[[txt.termsOfService]]</a> & <a href="/help/privacy/">[[txt.privacyNotice]]</a></small>
            <center><p class="inline-flex">[[txt.alreadyOn]] [[env.siteName]]? &nbsp; <a href="/login/" class="mobile-link-login">[[txt.login]]</a> <a on-click="_login" class="desktop-link-login">[[txt.login]]</a></p></center>
          </form>
        </div>
      </template>

        <template is="dom-if" if="{{sent}}">
          <h1>[[txt.verifyEmailAddress]]</h1>
          <p class="value">[[txt.verifyInfo]] [[email]] <a on-click="_change">([[txt.change]])</a></p>
          <div class="area">
          <p>
            <label for="name">[[txt.enterCode]]</label>
            <input type="text" name="code" id="code" value="{{code::input}}" required>
            <small class="issue">[[issueCode]]</small>
          </p>
          <template is="dom-if" if="{{resent}}"><small class="resent">[[txt.newCodeSent]]</small></template>
          <button class="modal-btn" on-click="_verify">[[txt.verify]]</button>
          <small class="resend-code"><a on-click="_resend">[[txt.resendCode]]</a></small>
          <small>[[txt.verifyNote]]</small>
          <ul>
            <li><small>[[txt.verifyNoteOne]]</small></li>
            <li><small>[[txt.verifyNoteTwo]]</small></li>
          </ul>
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
        observer: '_focusName',
      },
      sent: {
        type: Boolean,
        value: false,
      },
      resent: {
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

  _login() {
    this.dispatchEvent(new CustomEvent('modal', {bubbles: true, composed: true, detail: {action: 'login', language: this.language}}));
  }
  _change() {
    this.sent = false;
  }


  _join(e) {
    e.preventDefault();
    const name = this.name;
    const email = this.email;
    const password = this.password;
    const confirmPassword = this.confirmPassword;

    this.shadowRoot.querySelector('#name').classList.remove('error');
    this.shadowRoot.querySelector('#email').classList.remove('error');
    this.shadowRoot.querySelector('#password').classList.remove('error');
    this.shadowRoot.querySelector('#repassword').classList.remove('error');

    this.issueName = '';
    this.issueEmail = '';
    this.issuePassword = '';
    this.issueConfirmPassword = '';

    if (!name) {
      this.issueName = this.txt.enterYourName;
      this.shadowRoot.querySelector('#name').classList.add('error');
    }
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
    if (password && password.length >= 6 && !confirmPassword) {
      this.issueConfirmPassword = this.txt.typePasswordAgain;
      this.shadowRoot.querySelector('#repassword').classList.add('error');
    }
    if (password && password.length >= 6 && confirmPassword && confirmPassword.length >= 6 && password !== confirmPassword) {
      this.issueConfirmPassword = this.txt.passwordsMustMatch;
      this.shadowRoot.querySelector('#repassword').classList.add('error');
    }
    if (password && password.length >= 6 && confirmPassword && confirmPassword.length >=6 && password === confirmPassword) {
      const url = `${this.env.apiUrl}/guest/join/`;
      if (localStorage.getItem('language') === null) {
        localStorage.setItem('language', 'English');
      }
      const language = 'English' || localStorage.getItem('language');
      const mode = 'light' || localStorage.getItem('mode');
      const data = {name, email, password, language, mode};
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'},
      })
          .then((response) => {
            return response.json();
          })
          .then((response) => {
            if (!response.error) {
              this.sent = true;
              this._focusCode();
              localStorage.setItem('jwt', response.jwt);
            } else {
              this.issueEmail = this.txt.emailRegistered;
              this.shadowRoot.querySelector('#email').classList.add('error');
            }
          })
          .catch((error) => console.log('Error:', error));
    }
  }

  _resend() {
    this.resent = true;
    const url = `${this.env.apiUrl}/guest/resend/`;
    const jwt = localStorage.getItem('jwt');
    fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${jwt}`},
    })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          console.log('resent');
        });
  }

  _verify() {
    this.shadowRoot.querySelector('#code').classList.remove('error');
    const url = `${this.env.apiUrl}/guest/verify/`;
    const jwt = localStorage.getItem('jwt');
    const code = this.code.trim();
    if (code && code.length === 6) {
      const data = {code};
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${jwt}`},
      })
          .then((response) => {
            return response.json();
          })
          .then((response) => {
            console.log(response);
            if (response && response.data === true) {
              const fullname = response.name;
              const userid = response.id;
              const iconURL = `https://s3-us-west-1.amazonaws.com/ozark/${response.id}/pfp_200x200.jpg?versionId=null`;
              localStorage.setItem('id', userid);
              localStorage.setItem('fullname', fullname);

              if (iconURL, this.email, this.name, this.password) {
                this._storeCredential(iconURL, this.email, this.name, this.password);
              }
              this.dispatchAction({
                type: 'CHANGE_NAME',
                fullname: fullname,
              });

              this.dispatchAction({
                type: 'CHANGE_USERID',
                userid: userid,
              });

              this.name = '';
              this.email = '';
              this.password = '';
              this.confirmPassword = '';
              this.dispatchEvent(new CustomEvent('hideModal', {bubbles: true, composed: true}));
            } else {
              this.shadowRoot.querySelector('#code').classList.add('error');
              this.issueCode = this.txt.incorrectCode;
            }
          });
    } else {
      this.shadowRoot.querySelector('#code').classList.add('error');
      this.issueCode = this.txt.incorrectCode;
    }
  }

  _storeCredential(iconURL, id, name, password) {
    const credential = new PasswordCredential({iconURL, id, name, password});
    navigator.credentials.store(credential)
        .then(() => console.log('Storing credential for <b>' + credential.id + '</b> (result cannot be checked by the website)'))
        .catch((err) => console.log('Error storing credentials: ' + err));
  }

  _focusName() {
    setTimeout(() => {
      this.shadowRoot.querySelector('#name').focus();
    }, 0);
  }
  _focusCode() {
    setTimeout(() => {
      this.shadowRoot.querySelector('#code').focus();
    }, 0);
  }
  _yourName(e) {
    if (e.keyCode === 13) {
      this.shadowRoot.querySelector('#email').focus();
    }
  }
  _email(e) {
    if (e.keyCode === 13) {
      this.shadowRoot.querySelector('#password').focus();
    }
  }
  _password(e) {
    if (e.keyCode === 13) {
      this.shadowRoot.querySelector('#repassword').focus();
    }
  }
  _reEnter(e) {
    if (e.keyCode === 13) {
      this._join();
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
} window.customElements.define('main-join', MainJoin);
