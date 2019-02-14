import {createMixin} from '../../../node_modules/polymer-redux';
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '../../css/shared-styles.js';
import '../../components/main-layout.js';
import '../../components/main-join.js';
import store from '../../global/store.js';
const ReduxMixin = createMixin(store);

class PageLanguage extends ReduxMixin(PolymerElement) {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          background-color: var(--host-background-color);
          color: var(--host-color);
        }
        .container{
            max-width: 400px;
            margin: 0 auto;
            padding-top:10px;
            display: flex;
            flex-wrap: wrap;
            padding-left: 12px;
        }
        h1{
          font-size: 35px;
          text-align: center;
          font-size: 30px;
          display: block;
          width: 350px;
          font-weight: 300;
        }
        .container a:active{
          color: var(--active-color);
        }
        .container a{
          text-align: center;
          display: block;
          width: 82px;
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
          margin: 12px 12px 12px 0;
          cursor: pointer;
        }
      </style>
  
      <main-layout> 
          <div slot="aside">
            <!-- <help-navigation></help-navigation> -->
          </div>
          <div slot="body">
              <div class="container">
              <h1>[[language]]</h1>
                  <a on-click="_language">Català</a>
                  <a on-click="_language">Česky</a>
                  <a on-click="_language">Dansk</a>
                  <a on-click="_language">Deutsch</a>
                  <a on-click="_language">Ελληνικά</a>
                  <a on-click="_language">English</a>
                  <a on-click="_language">Español</a>
                  <a on-click="_language">Eesti</a>
                  <a on-click="_language">Basque</a>
                  <a on-click="_language">Filipino</a>
                  <a on-click="_language">Français</a>
                  <a on-click="_language">Indonesian</a>
                  <a on-click="_language">Íslenska</a>
                  <a on-click="_language">Italiano</a>
                  <a on-click="_language">Lietuviškai</a>
                  <a on-click="_language">Nederlands</a>
                  <a on-click="_language">Norsk</a>
                  <a on-click="_language">Polski</a>
                  <a on-click="_language">Português</a>
                  <a on-click="_language">Română</a>
                  <a on-click="_language">Русский</a>
                  <a on-click="_language">Slovenský</a>
                  <a on-click="_language">Suomi</a>
                  <a on-click="_language">Svenska</a>
                  <a on-click="_language">ภาษาไทย</a>
                  <a on-click="_language">Türkçe</a>
                  <a on-click="_language">日本語</a>
                  <a on-click="_language">简体中文</a>
                  <a on-click="_language">繁體中文</a>
                  <a on-click="_language">한국어</a>
                  <a on-click="_language">Српски</a>



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

  _language(e) {
    if (e.target) {
      this.language = e.target.text;
      this.dispatchAction({
        type: 'CHANGE_LANGUAGE',
        language: e.target.text,
      });
      localStorage.setItem('language', this.language);
    }
  }

  _mode() {
    this.updateStyles({'--active-color': this.color.blue});
    this.updateStyles({'--grey-color': this.color.grey});
    this.updateStyles({'--error-color': this.color.red});
    this.updateStyles({'--green-color': this.color.green});
    if (this.mode === 'light') {
      this.updateStyles({'--host-background-color': this.color.white2});
      this.updateStyles({'--input-background': this.color.white2});
      this.updateStyles({'--border-color': this.color.white3});
      this.updateStyles({'--input-color': this.color.black1});
      this.updateStyles({'--host-color': this.color.black2});
      this.updateStyles({'--btn-top': this.color.white1});
      this.updateStyles({'--btn-bottom': this.color.white2});
      this.updateStyles({'--btn-border': this.color.white3});
      this.updateStyles({'--btn-text': this.color.black3});
    } else {
      this.updateStyles({'--host-background-color': this.color.black2});
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
} window.customElements.define('page-language', PageLanguage);
