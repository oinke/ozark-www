import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import {setPassiveTouchGestures, setRootPath} from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';


setPassiveTouchGestures(true);
setRootPath(MyAppGlobals.rootPath);

class RouterHelp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <app-route route="{{route}}" pattern="[[rootPath]]help/:page" data="{{routeData}}" tail="{{subroute}}"></app-route>
      <main>
        <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
          <page-terms name="terms"></page-terms>
          <page-copyright name="copyright"></page-copyright>
          <page-privacy name="privacy"></page-privacy>
          <page-contact name="contact"></page-contact>
          <page-use name="use"></page-use>
          <page-error name="error"></page-error>
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
      this.page = 'terms';
    } else if (['terms', 'copyright', 'privacy', 'contact', 'use'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'error';
    }
  }

  _pageChanged(page) {
    window.scrollTo(0, 0);
    window.dataLayer.push({'event': 'Pageview', 'url': `/help/${page}`});
    switch (page) {
      case 'terms':
        import('./page-terms.js');
        break;
      case 'copyright':
        import('./page-copyright.js');
        break;
      case 'privacy':
        import('./page-privacy.js');
        break;
      case 'contact':
        import('./page-contact.js');
        break;
      case 'use':
        import('./page-use.js');
        break;
      case 'error':
        import('../page-error.js');
        break;
    }
  }
}
window.customElements.define('router-help', RouterHelp);
