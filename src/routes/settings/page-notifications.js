import {createMixin} from 'polymer-redux';
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import {translations} from '../../translations/languages.js';
import '../../css/shared-styles.js';
import '../../components/layouts/main-layout.js';
import '../../components/navigation/settings-navigation.js';
import '@polymer/app-route/app-location.js';
import store from '../../global/store.js';
const ReduxMixin = createMixin(store);

class PageNotifications extends ReduxMixin(PolymerElement) {
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
        .btn-right {
          display: block;
          text-align: right;
        }
        .clicky {
          cursor: pointer;
        }
        .notification-container{
          display: flex;
          line-height: 80px;
          border-top: 1px solid var(--black1-white2);
        }
        .notme{
          border-top: 1px solid transparent;
        }

        .switch {
          position: relative;
          display: inline-block;
          width: 60px;
          height: 34px;
          transform: scale(0.7);
        }
        .switch input { 
          opacity: 0;
          width: 0;
          height: 0;
        }
        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          -webkit-transition: .4s;
          transition: .4s;
        }
        .slider:before {
          position: absolute;
          content: "";
          height: 26px;
          width: 26px;
          left: 4px;
          bottom: 4px;
          background-color: white;
          -webkit-transition: .4s;
          transition: .4s;
        }
        input:checked + .slider {
          background-color: var(--blue-color);
        }
        input:focus + .slider {
          box-shadow: 0 0 1px var(--blue-color);
        }
        input:checked + .slider:before {
          -webkit-transform: translateX(26px);
          -ms-transform: translateX(26px);
          transform: translateX(26px);
        }
        .slider.round {
          border-radius: 34px;
        }
        .slider.round:before {
          border-radius: 50%;
        }
        .right-switch{
          width: 100px;
          position: relative;
          top: -13px;
        }
        .switch-text{
          flex: 1;
        }

        @media screen and (min-width: 900px){
          article {
            margin: 24px 12px 0 0;
          }
          .form-title {
            display: block;
          }
          input[type=text]  {
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
            <h1>[[txt.notifications]]</h1>
            <div class="form-section">
              <div class="form-title">[[txt.email]]</div>
              <div class="form-inputs">
              <div class="notification-container notme">
                <div class="switch-text">[[txt.whenIRecieveAMessage]]</div>
                <div class="right-switch">
                  <label class="switch">
                    <input type="checkbox" checked id="emailMessage" on-change="_tickBox"> 
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
              <div class="notification-container">
              <div class="switch-text">[[txt.whenSomeoneFollowsMe]]</div>
                <div class="right-switch">
                  <label class="switch">
                    <input type="checkbox" checked id="emailFollow" on-change="_tickBox">
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
              <div class="notification-container">
              <div class="switch-text">[[txt.newsletterIsPublished]]</div>
                <div class="right-switch">
                  <label class="switch">
                    <input type="checkbox" checked id="emailNewsletter" on-change="_tickBox">
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
              </div>
            </div>              
            <div class="form-section">
              <div class="form-title">Alerts</div>
              <div class="form-inputs">
              <div class="notification-container notme">
                <div class="switch-text">[[txt.whenIRecieveAMessage]]</div>
                <div class="right-switch">
                  <label class="switch">
                    <input type="checkbox" checked id="notifyMessage" on-change="_tickBox">
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
              <div class="notification-container">
              <div class="switch-text">[[txt.whenSomeoneFollowsMe]]</div>
                <div class="right-switch">
                  <label class="switch">
                    <input type="checkbox" checked id="notifyFollow" on-change="_tickBox">
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
              <div class="notification-container">
              <div class="switch-text">[[txt.newsletterIsPublished]]</div>
                <div class="right-switch">
                  <label class="switch">
                    <input type="checkbox" checked id="notifyNewsletter" on-change="_tickBox">
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
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
        value: 'Save Changes',
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
  }

  _tickBox(e) {
    this.emailMessage = this.shadowRoot.querySelector('#emailMessage').checked;
    this.emailFollow = this.shadowRoot.querySelector('#emailFollow').checked;
    this.emailNewsletter = this.shadowRoot.querySelector('#emailNewsletter').checked;
    this.notifyMessage = this.shadowRoot.querySelector('#notifyMessage').checked;
    this.notifyFollow = this.shadowRoot.querySelector('#notifyFollow').checked;
    this.notifyNewsletter = this.shadowRoot.querySelector('#notifyNewsletter').checked;
  }
  _save() {
    this.btntext = this.txt.saving;
    const emailMessage = this.emailMessage;
    const emailFollow = this.emailFollow;
    const emailNewsletter = this.emailNewsletter;
    const notifyMessage = this.notifyMessage;
    const notifyFollow = this.notifyFollow;
    const notifyNewsletter = this.notifyNewsletter;
    const data = {emailMessage, emailFollow, emailNewsletter, notifyMessage, notifyFollow, notifyNewsletter};
    const token = localStorage.getItem('jwt');
    const url = `${this.env.apiUrl}/users/notifications/`;
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json'},
    })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          this.btntext = this.txt.saveChanges;
        })
        .catch((error) => console.log('Error:', error));
  }

  _routeChanged() {
    if (this.route.path == '/settings/notifications/') {
      const token = localStorage.getItem('jwt');
      const url = `${this.env.apiUrl}/users/notifications/`;
      fetch(url, {
        method: 'GET',
        headers: {'Authorization': `Bearer ${token}`},
      })
          .then((response) => {
            return response.json();
          })
          .then((response) => {
            this.shadowRoot.querySelector('#emailMessage').checked = response.emailMessage;
            this.shadowRoot.querySelector('#emailFollow').checked = response.emailFollow;
            this.shadowRoot.querySelector('#emailNewsletter').checked = response.emailNewsletter;
            this.shadowRoot.querySelector('#notifyMessage').checked = response.notifyMessage;
            this.shadowRoot.querySelector('#notifyFollow').checked = response.notifyFollow;
            this.shadowRoot.querySelector('#notifyNewsletter').checked = response.notifyNewsletter;
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
} window.customElements.define('page-notifications', PageNotifications);
