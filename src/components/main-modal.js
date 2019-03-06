import {createMixin} from '../../node_modules/polymer-redux';
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import store from '../global/store.js';
import '../css/shared-styles.js';
import './main-join.js';
import './main-login.js';
import './main-feedback.js';

const ReduxMixin = createMixin(store);
class MainModal extends ReduxMixin(PolymerElement) {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          --opacity: 0;
          --display-none-block: none;
          position: fixed; 
          display: var(--display-none-block);
          width: 100%; 
          height: 100%; 
          top: 0; 
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 9999; 
        }
        .overlay{
          opacity: var(--opacity);
          background-color: rgba(0, 0, 0, 0.5); 
          transition: opacity 0.2s ease-in-out;
          position: fixed; 
          display: block;
          width: 100%; 
          height: 100%; 
          top: 0; 
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 300; 
          cursor: pointer; 
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal {
          width: 300px;
          padding: 40px;
          cursor: default;
          margin: 24px;
          padding: 40px;
          color: #757575;
          border-radius: 3px;
          background-color: var(--modal-background-color);
          box-shadow: 0 12px 12px 0 rgba(0, 0, 0, 0.14), 
          0 1px 5px 0 rgba(0, 0, 0, 0.12), 
          0 3px 1px -2px rgba(0, 0, 0, 0.2);
        }
      </style>
      <div class="overlay" on-click="_hide">
        
        <template is="dom-if" if="{{join}}">
          <div class="modal" on-click="_clickModal">
            <main-join></main-join>
          </div>
        </template>

        <template is="dom-if" if="{{login}}">
          <div class="modal" on-click="_clickModal">
            <main-login></main-login>   
          </div>
        </template>

        <template is="dom-if" if="{{feedback}}">
          <div class="modal" on-click="_clickModal">
            <main-feedback></main-login>   
          </div>
        </template>

      </div>
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
      reset: {
        type: Boolean,
        value: false,
      },
      join: {
        type: Boolean,
        value: false,
      },
      login: {
        type: Boolean,
        value: false,
      },
      feedback: {
        type: Boolean,
        value: false,
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

  ready() {
    super.ready();
    document.onkeydown = (evt) => {
      evt = evt || window.event;
      if (evt.keyCode == 27) {
        this._hide();
      }
    };
    window.addEventListener('modal', (e) => {
      this.language = e.detail.language;
      this._show(e.detail.action);
    });
    window.addEventListener('hideModal', () => {
      this._hide();
    });
  }

  _show(e) {
    this.updateStyles({'--display-none-block': 'block'});
    setTimeout(()=>{
      this.updateStyles({'--opacity': 1});
    }, 1);
    if (e === 'join') {
      this.join = true;
      this.login = false;
      this.feedback = false;
    } else if (e === 'login') {
      this.join = false;
      this.login = true;
      this.feedback = false;
    } else if (e === 'feedback') {
      this.join = false;
      this.login = false;
      this.feedback = true;
    }
  }

  _hide() {
    this.reset = true;
    this.updateStyles({'--opacity': 0});
    setTimeout(() => {
      this.updateStyles({'--display-none-block': 'none'});
    }, 1);
  }

  _clickModal(event) {
    event.stopPropagation();
  }

  _mode() {
    if (this.mode === 'light') {
      this.updateStyles({'--modal-background-color': this.color.white1});
    } else {
      this.updateStyles({'--modal-background-color': this.color.black2});
    }
  }
} window.customElements.define('main-modal', MainModal);
