import {createMixin} from 'polymer-redux';
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import store from '../../global/store.js';
import '@polymer/app-route/app-location.js';
import '@polymer/iron-selector/iron-selector.js';
import '../../css/shared-styles.js';

const ReduxMixin = createMixin(store);
class HelpNavigation extends ReduxMixin(PolymerElement) {
  static get template() {
    return html`
      <style include="shared-styles">
        .side-nav {
          display: block;
          position: relative;
          list-style-type: none;
          padding-left: 12px;
          margin-top: 20px;
        }
        .side-nav a{
          color: var(--host-color);
          text-decoration: none;
          line-height: 40px;
          margin-right: 24px;
          white-space: nowrap;
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
            padding-left: 12px;
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
            <a name="terms" href="[[rootPath]]help/terms/">Terms of Service</a>
            <a name="copyright" href="[[rootPath]]help/copyright/">Copyright</a>
            <a name="privacy" href="[[rootPath]]help/privacy/">Privacy Notice</a>
            <a name="use" href="[[rootPath]]help/use/">Acceptable Use</a>
            <a name="contact" href="[[rootPath]]help/contact/">Contact Us</a>
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
    } else {
      this.updateStyles({'--header-background-color': this.color.black2});
      this.updateStyles({'--host-color': this.color.white2});
      this.updateStyles({'--hover-color': this.color.grey});
    }
  }
} window.customElements.define('help-navigation', HelpNavigation);

