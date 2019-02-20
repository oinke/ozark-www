import {createMixin} from '../../node_modules/polymer-redux';
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import store from '../global/store.js';
import '../css/shared-styles.js';
import '../components/navigation/site-search.js';
import './navigation/mobile-navigation.js';
import './navigation/logged-out.js';
import './navigation/logged-in.js';

const ReduxMixin = createMixin(store);
class MainHeader extends ReduxMixin(PolymerElement) {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: box;
          background-color: var(--header-background-color);
          box-shadow: inset 0 1px 0 var(--header-background-color), 0 1px 0px rgba(0,0,0,0.08), 0 2px 2px rgba(0,0,0,0.05);
          z-index: 8888;
        }
        @media screen and (min-width: 900px){
          :host {
            position: fixed;
            left: 0;
            right: 0;
            top: -1px;
          }
        } 
        .inner {
          max-width: 75rem; 
          margin: 0 auto;
          display: flex;
        }
        .left, .right {
          flex:1;
          min-width:400px;
          display: none;
          height:55px;
        }
        .center {
          flex:1;
          min-width:100px;
        }
        .center h1 a {
          background: var(--host-logo);
          background-size: cover;
          width: var(--logo-width, 92px);
          height: var(--logo-height, 18px);
          margin: 0 auto;
          display: block;
          text-indent: -1000em;
        }

        @media screen and (min-width: 900px) {
          .left, .right {
            display: block;
          }
          .mobile-footer {
            display: none;
          }
        } 
        .mobile-footer {
          position: fixed;
          bottom: 0;
          left: 0;
          right:0;
          background-color: var(--header-background-color);
          border-top: 1px solid var(--hover-background);
          height: 50px;
          z-index: 8888;
        }
      </style>
      <div class="mobile-footer">
        <mobile-navigation></mobile-navigation>
      </div>
      <div class="inner">  
        <div class="left">
          <site-search></site-search>
        </div>
        <div class="center">
          <h1><a href="/">[[siteName]]</a></h1>
        </div>
        <div class="right">
          <template is="dom-if" if="{{!loggedin}}">
            <logged-out></logged-out>
          </template>
          <template is="dom-if" if="{{loggedin}}">
            <logged-in></logged-in>
          </template>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      siteName: {
        type: Text,
      },
      logoWidth: {
        type: Number,
        observer: '_logoSize',
      },
      logoHeight: {
        type: Number,
        observer: '_logoSize',
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
      loggedin: {
        type: Boolean,
        readOnly: true,
      },
    };
  }

  static mapStateToProps(state, element) {
    return {
      mode: state.mode,
      color: state.color,
      loggedin: state.loggedin,
    };
  }


  _logoSize() {
    if (this.logoWidth && this.logoHeight) {
      this.updateStyles({'--logo-width': `${this.logoWidth}px`});
      this.updateStyles({'--logo-height': `${this.logoHeight}px`});
    }
  }
  _mode() {
    if (this.mode === 'light') {
      this.updateStyles({'--header-background-color': this.color.white1});
      this.updateStyles({'--host-logo': `url(./images/light-logo.svg) no-repeat`});
      this.updateStyles({'--hover-background': this.color.white2});
    } else {
      this.updateStyles({'--header-background-color': this.color.black2});
      this.updateStyles({'--host-logo': `url(./images/dark-logo.svg) no-repeat`});
      this.updateStyles({'--hover-background': this.color.black1});
    }
  }
} window.customElements.define('main-header', MainHeader);
