import {createMixin} from 'polymer-redux';
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import store from '../../global/store.js';
import '@polymer/app-route/app-location.js';
import '@polymer/iron-selector/iron-selector.js';
import '../../css/shared-styles.js';

const ReduxMixin = createMixin(store);
class SettingsNavigation extends ReduxMixin(PolymerElement) {
  static get template() {
    return html`
      <style include="shared-styles">
        .side-nav {
          position: relative;
          list-style-type: none;
          margin-top: 20px;
          background-color: var(--header-background-color);
          width: 242px;
          padding: 0;
          border-radius: 3px;
          padding-top: 12px;
          padding-bottom: 12px;
          margin-left: 12px;
          box-shadow: 0 1px 0px 0px var(--border-color), 0 0px 0px 1px var(--border-color);
        }
        .side-nav a{
          color: var(--host-color);
          text-decoration: none;
          line-height: 40px;
          white-space: nowrap;
          text-indent: 24px;
        }
        .side-nav a:hover {
          color: var(--hover-color);
        }
        .side-nav a.iron-selected {
          color: var(--highlight-color);
          font-weight: bold;
        }
        @media screen and (min-width: 900px){
          .side-nav {
            display:block;
            position: fixed;
            z-index: 5px;
          }
          .side-nav a{
            display: block;
          }
        } 
      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
        <iron-selector selected="[[page]]" attr-for-selected="name" class="side-nav" role="navigation">
            <a name="terms" href="[[rootPath]]settings/profile/">Edit Profile</a>
            <a name="copyright" href="[[rootPath]]settings/preferences/">Preferences</a>
            <a name="privacy" href="[[rootPath]]settings/password/">Password</a>
            <a name="use" href="[[rootPath]]settings/notifications/">Notifications</a>
            <a name="contact" href="[[rootPath]]settings/accounts/">Accounts</a>
        </iron-selector>
    `;
  }

  static get properties() {
    return {
      language: {
        type: Text,
        readOnly: true,
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
      route: {
        type: String,
        observer: '_pageChanged',
      },
      page: {
        type: String,
        value: 'terms',
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

  _pageChanged() {
    this.page = this.route.path.split('/')[2];
  }
  _mode() {
    this.updateStyles({'--highlight-color': this.color.blue});
    if (this.mode === 'light') {
      this.updateStyles({'--header-background-color': this.color.white1});
      this.updateStyles({'--host-color': this.color.black2});
      this.updateStyles({'--hover-color': this.color.grey});
      this.updateStyles({'--border-color': this.color.white3});
    } else {
      this.updateStyles({'--header-background-color': this.color.black2});
      this.updateStyles({'--host-color': this.color.white2});
      this.updateStyles({'--hover-color': this.color.grey});
      this.updateStyles({'--border-color': this.color.black1});
    }
  }
} window.customElements.define('settings-navigation', SettingsNavigation);
