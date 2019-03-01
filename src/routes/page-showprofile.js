import {createMixin} from 'polymer-redux';
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';
import '../components/layouts/center-layout.js';
import '../components/main-profile.js';
import store from '../global/store.js';
const ReduxMixin = createMixin(store);

class PageShowprofile extends ReduxMixin(PolymerElement) {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          background-color: var(--host-background-color);
          color: var(--host-color);
        }
      </style>
  
      <center-layout> 
        <div slot="body">
          <main-profile></main-profile>
        </div>
      </center-layout>
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

  _mode() {
    if (this.mode === 'light') {
      this.updateStyles({'--host-background-color': this.color.white2});
      this.updateStyles({'--host-color': this.color.black2});
    } else {
      this.updateStyles({'--host-background-color': this.color.black2});
      this.updateStyles({'--host-color': this.color.white1});
    }
  }
} window.customElements.define('page-showprofile', PageShowprofile);
