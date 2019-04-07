import {createMixin} from 'polymer-redux';
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {translations} from '../../translations/languages.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import store from '../../global/store.js';
import '../../css/shared-styles.js';
import '../../components/live/live-messages.js';

const ReduxMixin = createMixin(store);
class LoggedIn extends ReduxMixin(PolymerElement) {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
            display: box;
        }
        .container {
          width: 100%;
          height:55px;
          display: flex;
          justify-content: flex-end;
        }
        .navigation {
          display: flex;
          margin:0;
          list-style:none;
        }
        .navigation>li{
          position:relative;
        }
        .navigation>li>a {
          display:block;
          padding:0 12px;
          color: var(--host-color);
          text-decoration:none;
          font-weight: 500;
          line-height: 55px;
          max-height: 55px;
          overflow: hidden;
          cursor: pointer;
          font-size: 14.5px;
          font-weight: 700;
        }
        .navigation>li>a:hover {
          color: var(--placeholder-color);
        }
        .navigation>li>a:active {
          color: var(--active-color);
        }
        .dropdown {
          visibility: var(--dropdown-visibility, hidden);
          opacity: var(--dropdown-opacity, 0);  
          right:0;
          display: flex;
          flex-wrap: wrap;
          background: var(--header-background-color);
          list-style:none;
          position:absolute;
          width: 200px;
          padding:6px 0;
          box-shadow: inset 0 1px 0 var(--hover-background), 0 1px 0px rgba(0,0,0,0.08), 0 2px 2px rgba(0,0,0,0.05);
          transition: opacity 0.3s ease-in-out;
          box-shadow: 0 4px 8px rgba(0, 0, 0, .2), 0 0 1px rgba(0,0,0,0.3);
          overflow:hidden;
        }
        .chatbox{
          visibility: var(--chatbox-visibility, hidden);
          opacity: var(--chatbox-opacity, 0);  
          background: var(--header-background-color);
          position:absolute;
          width: 280px;
          right:0;
          padding:6px 0;
          box-shadow: inset 0 1px 0 var(--hover-background), 0 1px 0px rgba(0,0,0,0.08), 0 2px 2px rgba(0,0,0,0.05);
          transition: opacity 0.3s ease-in-out;
          box-shadow: 0 4px 8px rgba(0, 0, 0, .2), 0 0 1px rgba(0,0,0,0.3);
          overflow:hidden;
        }
        .dropdown li a {
          color: var(--placeholder-color);
          display: block;
          width:200px;
          text-decoration:none;
          padding: 12px;
          cursor: pointer;
          text-indent: 12px;
        }
        .dropdown li a:hover {
          color: var(--search-color);
          background: var(--hover-background);
          cursor: pointer;
        }
        .dropdown li a:active {
          color: var(--active-color);
        }
        .avatar {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin-right: 12px;
            position: relative;
            top: 10px;
        }
        .inbox{
            height: 22px;
            margin: 15px 15px 0 15px;
        }
        hr {
            border: 1pc solid transparent;
            border-bottom: 0px;
            border-top: 1px solid var(--dropdown-divider);
            width: 100%;
        }
        
      </style>
        <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
        <div class="container">
            <ul class="navigation">
              <li><a on-click="_inbox"><img src="./images/inbox.png" class="inbox"></a>
              <div class="chatbox" on-mouseleave="_closeChatbox">
              <live-messages></live-messages></div>
              </li>
              
              <li><a on-click="_dropdown"><img src$="https://s3-us-west-1.amazonaws.com/ozark/[[userid]]/pfp_200x200.jpg?versionId=null" class="avatar">[[fullname]]</a>
                <ul class="dropdown" on-mouseleave="_closeDropdown">
                  <li><a on-click="_profile">[[txt.profile]]</a></li>
                  <li><a on-click="_switch">[[txt.switchAccount]]</a></li>
                  <li><a on-click="_changeMode">[[switchName]]</a></li>
                  <li><a on-click="_signOut">[[txt.signOut]]</a></li>
                  <hr/>
                  <li><a on-click="_settings">[[txt.settings]]</a></li>
                  <li><a on-click="_help">[[txt.help]]</a></li>
                  <li><a on-click="_feedback">[[txt.feedback]]</a></li>
                </ul>
              </li>
            </ul>
        </div>
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
      userid: {
        type: Text,
        readOnly: true,
      },
      color: {
        type: Object,
        readOnly: true,
      },
      fullname: {
        type: String,
      },
      username: {
        type: String,
      },
    };
  }

  static mapStateToProps(state, element) {
    return {
      fullname: state.fullname,
      language: state.language,
      mode: state.mode,
      color: state.color,
      userid: state.userid,
      username: state.username,
    };
  }
  _language() {
    this.txt = translations[this.language];
  }
  _feedback() {
    this._closeDropdown();
    this.dispatchEvent(new CustomEvent('modal', {bubbles: true, composed: true, detail: {action: 'feedback', language: this.language}}));
  }
  _profile() {
    this.set('route.path', `./${this.username}/`);
  }
  _settings() {
    this.set('route.path', '/settings/profile/');
    this._closeDropdown();
  }
  _signOut() {
    localStorage.setItem('loggedin', 'false');
    localStorage.removeItem('id');
    this.dispatchAction({
      type: 'CHANGE_STATUS',
      loggedin: false,
    });
    this.set('route.path', '/');
  }
  _changeMode() {
    let newMode = '';
    if (this.mode == 'light') {
      newMode = 'dark';
      document.body.style.backgroundColor = '#121212';
      localStorage.setItem('mode', 'dark');
    } else if (this.mode == 'dark') {
      newMode = 'light';
      document.body.style.backgroundColor = '#EEEEEE';
      localStorage.setItem('mode', 'light');
    }
    this._closeDropdown();
    this.dispatchAction({
      type: 'CHANGE_MODE',
      mode: newMode,
    });
  }

  _inbox(e) {
    this.updateStyles({'--chatbox-visibility': `visible`});
    this.updateStyles({'--chatbox-opacity': `1`});
  }
  _dropdown(e) {
    this.updateStyles({'--dropdown-visibility': `visible`});
    this.updateStyles({'--dropdown-opacity': `1`});
  }

  _closeDropdown() {
    this.updateStyles({'--dropdown-visibility': `hidden`});
    this.updateStyles({'--dropdown-opacity': `0`});
  }
  _closeChatbox() {
    this.updateStyles({'--chatbox-visibility': `hidden`});
    this.updateStyles({'--chatbox-opacity': `0`});
  }

  _mode() {
    if (this.mode == 'dark') {
      this.switchName = this.txt.enableLightMode;
    } else {
      this.switchName = this.txt.enableDarkMode;
    }
    this.updateStyles({'--placeholder-color': this.color.grey});
    this.updateStyles({'--active-color': this.color.blue});
    if (this.mode === 'light') {
      this.updateStyles({'--header-background-color': this.color.white1});
      this.updateStyles({'--host-color': this.color.black2});
      this.updateStyles({'--search-color': this.color.black1});
      this.updateStyles({'--hover-background': this.color.white2});
      this.updateStyles({'--dropdown-divider': this.color.white3});
    } else {
      this.updateStyles({'--header-background-color': this.color.black2});
      this.updateStyles({'--host-color': this.color.white1});
      this.updateStyles({'--search-color': this.color.white1});
      this.updateStyles({'--hover-background': this.color.black3});
      this.updateStyles({'--dropdown-divider': this.color.black3});
    }
  }
} window.customElements.define('logged-in', LoggedIn);

