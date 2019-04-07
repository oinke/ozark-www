import {createMixin} from 'polymer-redux';
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import {translations} from '../../translations/languages.js';
import store from '../../global/store.js';
import '../../css/shared-styles.js';
import '../main-header.js';
import '../social/social-icons.js';

const ReduxMixin = createMixin(store);
class MainLayout extends ReduxMixin(PolymerElement) {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: flex;
          height: 100vh;
          flex-direction: column;
          
        }
        .vertical-container{
          flex: 1 0 auto;
          padding-top:0px;
          background-color: var(--hover-background);
        }
        .aside {
          flex: 0 1 280px;
        }
        .body {
          flex: 1;
        }
        .footer {
          background-color: var(--hover-background);
        }
        footer ul{
          padding: 0;
          margin-left: 12px;
        }
        footer ul li{
          display:inline-block;
          color: var(--links-color);
        }
        footer .inner {
          max-width: var(--width-narrow, 75rem); 
          margin: 0 auto;
          display: -webkit-box;
          height: 40px;
        }
        footer .inner ul li a{
          font-size: 12px;
          font-weight:400;
          text-decoration: none;
          color: var(--links-color);
        }
        footer .inner ul li a:active{
          color: var(--link-active);
        }
        footer .inner ul li a:hover{
          text-decoration: underline;
        }
        .links{
          flex: 1;
        }
        @media screen and (min-width: 900px){
          .vertical-container{
            padding-top:56px;
          }
          .horizontal-container {
            display: flex;
            margin: auto;
            max-width: var(--width-narrow, 75rem); 
            flex-direction: var(--row-reverse, row);
          }
          footer .inner {
            display: flex;
          }
        } 
        @media print {    
          .no-print, .no-print * {
            display: none !important;
          }
        } 
      </style>
      
      <template is="dom-if" if="{{!noheader}}">
        <main-header site-name="Ozark" logo-width="88" logo-height="18" class="no-print"></main-header>
      </template>

      <div class="vertical-container">
        <div class="horizontal-container">
          <div class="aside">
            <slot name="aside" class="no-print"></slot>
          </div>
          <div class="body">
            <slot name="body"></slot>
          </div>
        </div>
      </div>

      <template is="dom-if" if="{{!nofooter}}">
        <footer class="footer">
          <div class="inner no-print">
            <div class="links">
              <ul>
                <li> © 2019 Ozark</li>
                <li>/ <a href="/help/terms/">[[txt.termsOfService]]</a></li>
                <li>/ <a href="/help/copyright/">[[txt.copyright]]</a></li>
                <li>/ <a href="/help/privacy/">[[txt.privacyNotice]]</a></li>
                <li>/ <a href="/help/contact/">[[txt.contactUs]]</a></li>
              </ul>
            </div>
            <div class="social">
              <social-icons></social-icons>
            </div>
          </div>

        </footer>
      </template>
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
      color: {
        type: Object,
        readOnly: true,
      },
      reverse: {
        type: Boolean,
        value: false,
        observer: '_reverse',
      },
      noheader: {
        type: Boolean,
        value: false,
      },
      nofooter: {
        type: Boolean,
        value: false,
      },
      narrow: {
        type: Boolean,
        value: false,
        observer: '_narrow',
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

  _narrow() {
    if (this.narrow) {
      this.updateStyles({'--width-narrow': '60rem'});
    }
  }

  _language(e) {
    this.txt = translations[this.language];
  }

  _reverse() {
    if (this.reverse === true) {
      this.updateStyles({'--row-reverse': 'row-reverse'});
    } else {
      this.updateStyles({'--row-reverse': 'row'});
    }
  }

  _mode() {
    this.updateStyles({'--link-active': this.color.blue});
    if (this.mode === 'light') {
      this.updateStyles({'--placeholder-color': this.color.grey});
      this.updateStyles({'--hover-background': this.color.white2});
      this.updateStyles({'--links-color': this.color.black1});
    } else {
      this.updateStyles({'--placeholder-color': this.color.grey});
      this.updateStyles({'--hover-background': this.color.black1});
      this.updateStyles({'--links-color': this.color.white3});
    }
  }
} window.customElements.define('main-layout', MainLayout);
