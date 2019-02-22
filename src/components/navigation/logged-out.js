import {createMixin} from 'polymer-redux';
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {translations} from '../../translations/languages.js';
import store from '../../global/store.js';
import '../../css/shared-styles.js';

const ReduxMixin = createMixin(store);
class LoggedOut extends ReduxMixin(PolymerElement) {
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
        }
        .navigation>li>a:hover {
          color: var(--placeholder-color);
        }
        .navigation>li>a:active {
          color: var(--active-color);
        }
        .navigation span {
          width: 0; 
          height: 0; 
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid var(--host-color);
          position: relative;
          top: 10px;
          margin-left: 3px;
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
          width: 250px;
          padding:3px 0 0;
          box-shadow: inset 0 1px 0 var(--hover-background), 0 1px 0px rgba(0,0,0,0.08), 0 2px 2px rgba(0,0,0,0.05);
          transition: opacity 0.3s ease-in-out;
        }
        .dropdown li a {
          color: var(--placeholder-color);
          display: block;
          width:101px;
          text-decoration:none;
          padding:6px 12px;
          cursor: pointer;
        }
        .dropdown li a:hover {
          color: var(--search-color);
          background: var(--hover-background);
          cursor: pointer;
        }
        .dropdown li a:active {
          color: var(--active-color);
        }
      </style>

        <div class="container">
            <ul class="navigation">
              <li><a on-click="_join">[[txt.join]] [[siteName]]</a></li>
              <li><a on-click="_login">[[txt.login]]</a></li>
              <li><a on-click="_dropdown">[[language]]<span></span></a>
                <ul class="dropdown" on-mouseleave="_closeDropdown">
                  <li><a on-click="_language">Català</a></li>
                  <li><a on-click="_language">Česky</a></li>
                  <li><a on-click="_language">Dansk</a></li>
                  <li><a on-click="_language">Deutsch</a></li>
                  <li><a on-click="_language">Ελληνικά</a></li>
                  <li><a on-click="_language">English</a></li>
                  <li><a on-click="_language">Español</a></li>
                  <li><a on-click="_language">Eesti</a></li>
                  <li><a on-click="_language">Basque</a></li>
                  <li><a on-click="_language">Filipino</a></li>
                  <li><a on-click="_language">Français</a></li>
                  <li><a on-click="_language">Indonesian</a></li>
                  <li><a on-click="_language">Íslenska</a></li>
                  <li><a on-click="_language">Italiano</a></li>
                  <li><a on-click="_language">Lietuviškai</a></li>
                  <li><a on-click="_language">Nederlands</a></li>
                  <li><a on-click="_language">Norsk</a></li>
                  <li><a on-click="_language">Polski</a></li>
                  <li><a on-click="_language">Português</a></li>
                  <li><a on-click="_language">Română</a></li>
                  <li><a on-click="_language">Русский</a></li>
                  <li><a on-click="_language">Slovenský</a></li>
                  <li><a on-click="_language">Suomi</a></li>
                  <li><a on-click="_language">Svenska</a></li>
                  <li><a on-click="_language">ภาษาไทย</a></li>
                  <li><a on-click="_language">Türkçe</a></li>
                  <li><a on-click="_language">日本語</a></li>
                  <li><a on-click="_language">简体中文</a></li>
                  <li><a on-click="_language">繁體中文</a></li>
                  <li><a on-click="_language">한국어</a></li>
                  <li><a on-click="_language">Српски</a></li>
                </ul>
              </li>
            </ul>
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
    };
  }

  static mapStateToProps(state, element) {
    return {
      language: state.language,
      mode: state.mode,
      color: state.color,
    };
  }
  _dropdown(e) {
    this.updateStyles({'--dropdown-visibility': `visible`});
    this.updateStyles({'--dropdown-opacity': `1`});
  }
  _closeDropdown(e) {
    this.updateStyles({'--dropdown-visibility': `hidden`});
    this.updateStyles({'--dropdown-opacity': `0`});
  }
  _language(e) {
    if (e.target) {
      this.language = e.target.text;
      this.dispatchAction({
        type: 'CHANGE_LANGUAGE',
        language: e.target.text,
      });
      localStorage.setItem('language', this.language);
      this._closeDropdown();
    }
    this.txt = translations[this.language];
  }
  _join(e) {
    this._closeDropdown();
    this.dispatchEvent(new CustomEvent('modal', {bubbles: true, composed: true, detail: {action: 'join', language: this.language}}));
  }
  _login(e) {
    this.dispatchEvent(new CustomEvent('modal', {bubbles: true, composed: true, detail: {action: 'login', language: this.language}}));
  }
  _mode() {
    this.updateStyles({'--placeholder-color': this.color.grey});
    this.updateStyles({'--active-color': this.color.blue});
    if (this.mode === 'light') {
      this.updateStyles({'--header-background-color': this.color.white1});
      this.updateStyles({'--host-color': this.color.black2});
      this.updateStyles({'--search-color': this.color.black1});
      this.updateStyles({'--hover-background': this.color.white2});
    } else {
      this.updateStyles({'--header-background-color': this.color.black2});
      this.updateStyles({'--host-color': this.color.white1});
      this.updateStyles({'--search-color': this.color.white1});
      this.updateStyles({'--hover-background': this.color.black3});
    }
  }
} window.customElements.define('logged-out', LoggedOut);

