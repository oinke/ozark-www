import {createMixin} from 'polymer-redux';
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '../../css/shared-styles.js';
import '../../components/main-layout.js';
import '../../components/navigation/settings-navigation.js';
import store from '../../global/store.js';
const ReduxMixin = createMixin(store);

class PagePreferences extends ReduxMixin(PolymerElement) {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          background-color: var(--host-background-color);
          color: var(--host-color);
        }
        article {
          margin-bottom: 100px;
        }
        article a {
          color: var(--host-color);
        }
        article h1 {
          font-size: 35px;
          font-weight: 300;
        }
        article h3 {
          font-size: 18px;
          font-weight: 300;
        }
        article p {
          font-size: 14px;
          line-height:1.5em;
          margin-bottom:20px;
        }
        article {
          margin: 0 12px;
        }
        @media screen and (min-width: 900px){
          article {
            margin: 0 12px 0 0;
          }
        } 
      </style>
  
      <main-layout narrow> 
          <div slot="aside">
          <settings-navigation></settings-navigation>
          </div>
          <div slot="body">
            Preferences
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

  _mode() {
    if (this.mode === 'light') {
      this.updateStyles({'--host-background-color': this.color.white2});
      this.updateStyles({'--host-color': this.color.black2});
    } else {
      this.updateStyles({'--host-background-color': this.color.black2});
      this.updateStyles({'--host-color': this.color.white2});
    }
  }
} window.customElements.define('page-preferences', PagePreferences);
