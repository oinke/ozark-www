import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import {setPassiveTouchGestures, setRootPath} from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';


setPassiveTouchGestures(true);
setRootPath(MyAppGlobals.rootPath);

class RouterSettings extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <app-route route="{{route}}" pattern="[[rootPath]]settings/:page" data="{{routeData}}" tail="{{subroute}}"></app-route>
      <main>
        <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
          <page-profile name="profile"></page-profile>
          <page-preferences name="preferences"></page-preferences>
          <page-password name="password"></page-password>
          <page-notifications name="notifications"></page-notifications>
          <page-accounts name="accounts"></page-accounts>
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
      routeData: Object,
      subroute: Object,
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)',
    ];
  }

  _routePageChanged(page) {
    if (!page) {
      this.page = 'profile';
    } else if (['profile', 'preferences', 'password', 'notifications', 'accounts'].indexOf(page) !== -1) {
      this.page = page;
    }
  }

  _pageChanged(page) {
    window.scrollTo(0, 0);
    // window.dataLayer.push({'event': 'Pageview', 'url': `/help/${page}`});
    switch (page) {
      case 'profile':
        import('./page-profile.js');
        break;
      case 'preferences':
        import('./page-preferences.js');
        break;
      case 'password':
        import('./page-password.js');
        break;
      case 'notifications':
        import('./page-notifications.js');
        break;
      case 'accounts':
        import('./page-accounts.js');
        break;
    }
  }
}
window.customElements.define('router-settings', RouterSettings);
