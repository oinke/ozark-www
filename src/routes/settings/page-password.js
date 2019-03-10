import {createMixin} from 'polymer-redux';
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import {translations} from '../../translations/languages.js';
import '../../css/shared-styles.js';
import '../../components/layouts/main-layout.js';
import '../../components/navigation/settings-navigation.js';
import '@polymer/app-route/app-location.js';
import store from '../../global/store.js';
const ReduxMixin = createMixin(store);

class PagePassword extends ReduxMixin(PolymerElement) {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          background-color: var(--black2-white1);
          color: var(--white2-black2);
        }
 
        .form {
          display: block;
          margin-top: 20px;
          background-color: var(--black2-white1);
          border-radius: 3px;
          box-shadow: 0 1px 0px 0px var(--black3-white3), 0 0px 0px 1px var(--black3-white3);
        }
        .form h1 {
          font-weight: 900;
          margin: 0px;
          border-bottom: 1px solid var(--black1-white2);
          padding: 15px;
          font-size: 17px;
        }
        .form-section {
          display: flex;
          padding-bottom: 30px;
          padding-top: 30px;
          border-bottom: 1px solid var(--black1-white2);
        }
        .form-title{
          width: 200px;
          text-indent: 24px;
          font-size: 16px;
          display: none;
        }
        .form-inputs{
          flex: 1;
          padding: 12px;
        }
        .photo{
          background-color: black;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin-top: 12px;
          border: 1px solid var(--black1-white2);
        }
        .btn-right {
          display: block;
          text-align: right;
        }
        .clicky {
          cursor: pointer;
        }

        @media screen and (min-width: 900px){
          article {
            margin: 24px 12px 0 0;
          }
          .form-title {
            display: block;
          }
          input[type=password]  {
            max-width: 300px;
          }
          .form-inputs {
            padding: 0;
          }
        } 
      </style>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <main-layout narrow> 
        <div slot="aside">
          <settings-navigation></settings-navigation>
        </div>
        <div slot="body">
          <div class='form'>
            <h1>[[txt.changePassword]]</h1>
            <div class="form-section">
              <div class="form-title"></div>
              <div class="form-inputs">
                <label>[[txt.newPassword]]</label>
                <input type="password" class="text" id="password" value="{{password::input}}">
                <small>[[txt.password6Characters]]</small>
                <label>[[txt.confirmPassword]]</label>
                <input type="password" class="text" value="{{confirmPassword::input}}">
              </div>
            </div>              
            <div class="btn-right">
              <button class="flat-btn" on-click="_save">[[btntext]]</button>
            </div>

          </div>
        </div>
      </main-layout>
    `;
  }

  static get properties() {
    return {
      language: {
        type: String,
        readOnly: true,
        observer: '_language',
      },
      mode: {
        type: String,
        readOnly: true,
        observer: '_mode',
      },
      env: {
        type: Object,
        readOnly: true,
      },
      color: {
        type: Object,
        readOnly: true,
      },
      route: {
        type: Object,
        observer: '_routeChanged',
      },
      userid: {
        type: String,
      },
      btntext: {
        type: String,
        value: 'Save Password',
      },
    };
  }

  static mapStateToProps(state, element) {
    return {
      fullname: state.fullname,
      userid: state.userid,
      language: state.language,
      mode: state.mode,
      env: state.env,
      color: state.color,
    };
  }

  _language(e) {
    this.txt = translations[this.language];
    this.btntext = this.txt.savePassword;
  }

  _save() {
    if (this.password && this.confirmPassword && this.password === this.confirmPassword && this.password.length > 6) {
      this.btntext = this.txt.saving;
      const password = this.password;
      const data = {password};
      const token = localStorage.getItem('jwt');
      const url = `${this.env.apiUrl}/users/password/`;
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json'},
      })
          .then((response) => {
            return response.json();
          })
          .then((response) => {
            localStorage.setItem('jwt', response.jwt);
            this.btntext = this.txt.savePassword;
            this.password = '';
            this.confirmPassword = '';
          })
          .catch((error) => console.log('Error:', error));
    }
  }
  _mode() {
    this.updateStyles({'--blue-color': this.color.blue});
    this.updateStyles({'--grey-color': this.color.grey});
    this.updateStyles({'--red-color': this.color.red});
    this.updateStyles({'--green-color': this.color.green});
    if (this.mode === 'light') {
      this.updateStyles({'--black1-white2': this.color.white2});
      this.updateStyles({'--black3-white3': this.color.white3});
      this.updateStyles({'--white1-black1': this.color.black1});
      this.updateStyles({'--white2-black2': this.color.black2});
      this.updateStyles({'--black3-white1': this.color.white1});
      this.updateStyles({'--black1-white2': this.color.white2});
      this.updateStyles({'--black1-white3': this.color.white3});
      this.updateStyles({'--white2-black3': this.color.black3});
      this.updateStyles({'--black2-white1': this.color.white1});
      this.updateStyles({'--black2-white3': this.color.white3});
    } else {
      this.updateStyles({'--black1-white2': this.color.black1});
      this.updateStyles({'--black3-white3': this.color.black3});
      this.updateStyles({'--white1-black1': this.color.white1});
      this.updateStyles({'--white2-black2': this.color.white2});
      this.updateStyles({'--black3-white1': this.color.black3});
      this.updateStyles({'--black1-white2': this.color.black1});
      this.updateStyles({'--black1-white3': this.color.black1});
      this.updateStyles({'--white2-black3': this.color.white2});
      this.updateStyles({'--black2-white1': this.color.black2});
      this.updateStyles({'--black2-white3': this.color.black2});
    }
  }
} window.customElements.define('page-password', PagePassword);
