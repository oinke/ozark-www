import {createMixin} from '../../../node_modules/polymer-redux';
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import store from '../../global/store.js';
import '@polymer/app-route/app-location.js';
import '@polymer/iron-selector/iron-selector.js';
import '../../css/shared-styles.js';

const ReduxMixin = createMixin(store);
class LoadingCircular extends ReduxMixin(PolymerElement) {
  static get template() {
    return html`
      <style include="shared-styles">
        :host{
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .loader {
          position: relative;
          margin: 0px auto;
          width: 100px;
        }
        .loader:before {
          content: '';
          display: block;
          padding-top: 100%;
        }
        .circular {
          -webkit-animation: rotate 2s linear infinite;
          animation: rotate 2s linear infinite;
          height: 100%;
          -webkit-transform-origin: center center;
          -ms-transform-origin: center center;
          transform-origin: center center;
          width: 100%;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
        }
        .path {
          stroke-dasharray: 1, 200;
          stroke-dashoffset: 0;
          -webkit-animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
          animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
          stroke-linecap: round;
        }
        @-webkit-keyframes 
        rotate {  100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
          }
        }

        @keyframes 
        rotate {  100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
          }
        }

        @-webkit-keyframes 
        dash {  0% {
          stroke-dasharray: 1, 200;
          stroke-dashoffset: 0;
          }
          50% {
          stroke-dasharray: 89, 200;
          stroke-dashoffset: -35;
          }
          100% {
          stroke-dasharray: 89, 200;
          stroke-dashoffset: -124;
          }
        }

        @keyframes 
          dash {  0% {
          stroke-dasharray: 1, 200;
          stroke-dashoffset: 0;
          }
          50% {
          stroke-dasharray: 89, 200;
          stroke-dashoffset: -35;
          }
          100% {
          stroke-dasharray: 89, 200;
          stroke-dashoffset: -124;
          }
        }

        @-webkit-keyframes 
        color {  100%, 0% {
          stroke: #0064B5;
          }
          40% {
          stroke: #1A76C0;
          }
          66% {
          stroke: #3B8BCB;
          }
          80%, 90% {
          stroke: #81B3DB;
          }
        }

        @keyframes 
        color {  100%, 0% {
          stroke: #0064B5;
          }
          40% {
          stroke: #1A76C0;
          }
          66% {
          stroke: #3B8BCB;
          }
          80%, 90% {
          stroke: #81B3DB;
          }
        }

      </style>
<div class="loader">
  <svg class="circular" viewBox="25 25 50 50">
    <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
  </svg>
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
} window.customElements.define('loading-circular', LoadingCircular);

