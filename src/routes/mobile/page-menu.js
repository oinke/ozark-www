import {createMixin} from '../../../node_modules/polymer-redux';
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '../../css/shared-styles.js';
import '../../components/layouts/main-layout.js';
import '../../components/main-join.js';
import store from '../../global/store.js';
const ReduxMixin = createMixin(store);

class PageMenu extends ReduxMixin(PolymerElement) {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          background-color: var(--host-background-color);
          color: var(--white1-black1);
        }
        .container{
            max-width: 300px;
            margin: 0 auto;
            padding-top:0px;
            display: block;
        }
        h1 {
            font-weight: 200;
            font-size: 30px;
        }
        p {
            margin-bottom: 40px;
        }
        a {
            text-decoration: none;
            color: var(--white1-black1);
        }
        ul {
          list-style: none;
          padding: 0px;
          text-indent: 50px;
        }
        li {
          line-height: 48px;
          border-bottom: 1px solid var(--grey-color);
        }
        
      </style>
  
      <main-layout> 
          <div slot="aside">
          </div>
          <div slot="body">
            <template is="dom-if" if="{{!loggedin}}">
              <div class="container">
                  <h1>Ozark is more fun with friends</h1>
                  <p>Log in to see what your friends are up to.</p>
                <a href="/join"><button class="modal-btn">Join</button></a>
                <a href="/login"><button class="modal-btn">Login</button></a>
              </div>
            </template>
            <template is="dom-if" if="{{loggedin}}">
              <ul>
                <a href="/eggs/"><li>Profile</li></a>
                <li>Switch account</li>
                <li>Enable dark mode</li>
                <li>Sign Out</li>
                <a href="/settings/"><li>Settings</li></a>
                <li>Help</li>
                <li>Feedback</li>
              </ul>
            </template>
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
      loggedin: {
        type: Boolean,
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
      loggedin: state.loggedin,
    };
  }

  _mode() {
    this.updateStyles({'--blue-color': this.color.blue});
    this.updateStyles({'--grey-color': this.color.grey});
    this.updateStyles({'--red-color': this.color.red});
    this.updateStyles({'--green-color': this.color.green});
    if (this.mode === 'light') {
      this.updateStyles({'--black3-white3': this.color.white3});
      this.updateStyles({'--white1-black1': this.color.black1});
      this.updateStyles({'--white2-black2': this.color.black2});
      this.updateStyles({'--black3-white1': this.color.white1});
      this.updateStyles({'--black1-white2': this.color.white2});
      this.updateStyles({'--black1-white3': this.color.white3});
      this.updateStyles({'--white2-black3': this.color.black3});
    } else {
      this.updateStyles({'--black3-white3': this.color.black3});
      this.updateStyles({'--white1-black1': this.color.white1});
      this.updateStyles({'--white2-black2': this.color.white2});
      this.updateStyles({'--black3-white1': this.color.black3});
      this.updateStyles({'--black1-white2': this.color.black1});
      this.updateStyles({'--black1-white3': this.color.black1});
      this.updateStyles({'--white2-black3': this.color.white2});
    }
  }
} window.customElements.define('page-menu', PageMenu);
