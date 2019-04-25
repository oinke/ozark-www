import {createMixin} from '../../node_modules/polymer-redux';
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';
import '../components/layouts/center-layout.js';
import store from '../global/store.js';
const ReduxMixin = createMixin(store);

class PageHome extends ReduxMixin(PolymerElement) {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          background-color: var(--host-background-color);
          color: var(--host-color);
        }
        iframe {
          width: 100%;
          height: calc(100vh - 150px);
          margin-top: 24px;
          border: 0px
        }
      </style>
      <center-layout> 
        <div slot="body">
          <iframe src="https://hexagonalchess.online/?token=sdfsdf&gameid=test1"></iframe>
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
    this.updateStyles({'--blue-color': this.color.blue});
    this.updateStyles({'--grey-color': this.color.grey});
    this.updateStyles({'--red-color': this.color.red});
    this.updateStyles({'--green-color': this.color.green});
    if (this.mode === 'light') {
      this.updateStyles({'--host-background-color': this.color.white2});
      this.updateStyles({'--host-color': this.color.black2});
      this.updateStyles({'--black1-white2': this.color.white2});
      this.updateStyles({'--black3-white3': this.color.white3});
      this.updateStyles({'--white1-black1': this.color.black1});
      this.updateStyles({'--white2-black2': this.color.black2});
      this.updateStyles({'--black3-white1': this.color.white1});
      this.updateStyles({'--black1-white2': this.color.white2});
      this.updateStyles({'--black1-white3': this.color.white3});
      this.updateStyles({'--white2-black3': this.color.black3});
      this.updateStyles({'--black2-white1': this.color.white1});
      this.updateStyles({'--black2-white3': this.color.white3});
    } else {
      this.updateStyles({'--host-background-color': this.color.black2});
      this.updateStyles({'--host-color': this.color.white1});
      this.updateStyles({'--black1-white2': this.color.black1});
      this.updateStyles({'--black3-white3': this.color.black3});
      this.updateStyles({'--white1-black1': this.color.white1});
      this.updateStyles({'--white2-black2': this.color.white2});
      this.updateStyles({'--black3-white1': this.color.black3});
      this.updateStyles({'--black1-white2': this.color.black1});
      this.updateStyles({'--black1-white3': this.color.black1});
      this.updateStyles({'--white2-black3': this.color.white2});
      this.updateStyles({'--black2-white1': this.color.black2});
      this.updateStyles({'--black2-white3': this.color.black2});
    }
  }
} window.customElements.define('page-home', PageHome);
