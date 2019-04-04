import {createMixin} from '../node_modules/polymer-redux';
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import {setPassiveTouchGestures, setRootPath} from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import './components/main-modal.js';
import './components/live/live-connect.js';

import store from './global/store.js';
const ReduxMixin = createMixin(store);

setPassiveTouchGestures(true);
setRootPath(MyAppGlobals.rootPath);

class AppShell extends ReduxMixin(PolymerElement) {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <!-- <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=[[env.googleTagManager]]" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> -->
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}"></app-route>
      <main-modal></main-modal>
      <live-connect></live-connect>
      <main>
        <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
          <page-home name="home"></page-home>
          <router-settings name="settings"></router-settings>
          <router-help name="help"></router-help>
          <page-join name="join"></page-join>
          <page-login name="login"></page-login>
          <page-search name="search"></page-search>
          <page-menu name="menu"></page-menu>
          <page-language name="language"></page-language>
          <page-showprofile name="showprofile"></page-showprofile>
        </iron-pages>
      </main>

    `;
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged',
      },
      env: {
        type: Object,
        readOnly: true,
      },
      routeData: Object,
      subroute: Object,
    };
  }

  static mapStateToProps(state, element) {
    return {
      env: state.env,
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)',
    ];
  }

  _routePageChanged(page) {
    if (!page) {
      this.page = 'home';
    } else if (['home', 'help', 'settings', 'join', 'login', 'search', 'language', 'menu'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'showprofile';
    }
  }

  _pageChanged(page) {
    window.scrollTo(0, 0);
    // if (page !== 'help') {
    //   window.dataLayer.push({'event': 'Pageview', 'url': `${page}`});
    // }
    switch (page) {
      case 'home':
        import('./routes/page-home.js');
        break;
      case 'help':
        import('./routes/help/router-help.js');
        break;
      case 'settings':
        import('./routes/settings/router-settings.js');
        break;
      case 'join':
        import('./routes/mobile/page-join.js');
        break;
      case 'login':
        import('./routes/mobile/page-login.js');
        break;
      case 'search':
        import('./routes/mobile/page-search.js');
        break;
      case 'menu':
        import('./routes/mobile/page-menu.js');
        break;
      case 'language':
        import('./routes/mobile/page-language.js');
        break;
      case 'showprofile':
        import('./routes/page-showprofile.js');
        break;
    }
  }
}

window.customElements.define('app-shell', AppShell);
