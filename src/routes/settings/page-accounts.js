import {createMixin} from 'polymer-redux';
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '../../css/shared-styles.js';
import '../../components/main-layout.js';
import '../../components/navigation/settings-navigation.js';
import store from '../../global/store.js';
const ReduxMixin = createMixin(store);

class PageAccounts extends ReduxMixin(PolymerElement) {
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
      </style>
  
      <main-layout narrow> 
          <div slot="aside">
          <settings-navigation></settings-navigation>
          </div>
          <div slot="body">
            <div class='form'>
              <h1>Connect Accounts</h1>
              <p>Link your accounts to easily share your activities.
              <div class="form-section">

                <div class="form-title">Email</div>
                <div class="form-inputs">
                <div class="notification-container notme">
                  <div class="switch-text">Twiiter</div>
                  <div class="right-switch">
                    <label class="switch">
                      <input type="checkbox" id="emailMessage" on-change="_twitterLogin"> 
                      <span class="slider round"></span>
                    </label>
                  </div>
                </div>
                <div class="notification-container">
                <div class="switch-text">Facebook</div>
                  <div class="right-switch">
                    <label class="switch">
                      <input type="checkbox" id="emailFollow" on-change="_facebookLogin">
                      <span class="slider round"></span>
                    </label>
                  </div>
                </div>
                <div class="notification-container">
                <div class="switch-text">Google</div>
                  <div class="right-switch">
                    <label class="switch">
                      <input type="checkbox" id="emailNewsletter" on-change="_googleLogin">
                      <span class="slider round"></span>
                    </label>
                  </div>
                </div>
                </div>
              </div>              
              <div class="btn-right">
              <p>We will never post or perform any action with your accounts without your consent.</p>
              </div>
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
    };
  }

  static mapStateToProps(state, element) {
    return {
      language: state.language,
      mode: state.mode,
      env: state.env,
      color: state.color,
    };
  }

  _twitterLogin() {
    const token = localStorage.getItem('jwt');
    const url = `${this.env.apiUrl}/accounts/twitter/`;
    const data = {action: 'requestToken'};
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json'},
    })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log('Error:', error));
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
} window.customElements.define('page-accounts', PageAccounts);
