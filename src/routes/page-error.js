import {createMixin} from '../../node_modules/polymer-redux';
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';
import store from '../global/store.js';
const ReduxMixin = createMixin(store);

class PageError extends ReduxMixin(PolymerElement) {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          height: 100vh;
        }
      </style>
      Oops you hit a 404. <a href="[[rootPath]]" id="error">Head back to home.</a>
    `;
  }
} window.customElements.define('page-error', PageError);
