import {createMixin} from 'polymer-redux';
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import store from '../../global/store.js';
import '../../css/shared-styles.js';

const ReduxMixin = createMixin(store);
class MobileNavigation extends ReduxMixin(PolymerElement) {
  static get template() {
    return html`
      <style include="shared-styles">
                :host {
          display: box;
          }
        .mobile-inner {
          display: flex;
        }

        .mobile-inner a {
          cursor: pointer;
          height: 50px;
          background-repeat: no-repeat;
          background-position: center; 
          background-size: 20px;
          flex: 1;
        }
        .home{
          background-image: url('./images/mobile-home.png');
        }
        .search{
          background-image: url('./images/mobile-search.png');
        }
        .join{
          background-image: url('./images/mobile-join.png');
        }
        .login{
          background-image: url('./images/mobile-join.png');
        }
        .language{
          background-image: url('./images/mobile-language.png');
        }
        .hide {
          line-height: 0; 
          font-size: 0;
          color: transparent; 
        }
      </style>
        <div class="mobile-inner">
          <a href="/" class="home hide">Home</a>
          <a href="/search/" class="search hide">Search</a>
          <a href="/join/" class="join hide">Join</a>
          <a href="/language/" class="language hide">language</a>
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
} window.customElements.define('mobile-navigation', MobileNavigation);

