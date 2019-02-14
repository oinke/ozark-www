import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

class IconFacebook extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          margin: 1px;
        }
        .default-color, .icon  {
          height: var(--icon-size);
          width: var(--icon-size);
        }
        .icon:hover .default-color {
          display: none;
        }
        .hover-color {
          height: var(--icon-size);
          width: var(--icon-size);
          display: none;
        }
        .icon:hover .hover-color {
          display: block;
        }
      </style>

      <div class="icon">

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="default-color">
          <title>Facebook</title>
          <path fill$="[[color]]" d="M18.896,0H1.104C0.494,0,0,0.494,0,1.104v17.792C0,19.506,0.494,20,1.104,20h9.579v-7.745H8.076V9.237h2.606 V7.011c0-2.583,1.578-3.99,3.882-3.99c1.104,0,2.053,0.082,2.329,0.119v2.7L15.296,5.84c-1.253,0-1.496,0.596-1.496,1.469v1.927 h2.989l-0.389,3.018h-2.6V20h5.097C19.506,20,20,19.506,20,18.896V1.104C20,0.494,19.506,0,18.896,0z"></path>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="hover-color">
          <title>Facebook</title>
          <path fill$="[[hoverColor]]" d="M18.896,0H1.104C0.494,0,0,0.494,0,1.104v17.792C0,19.506,0.494,20,1.104,20h9.579v-7.745H8.076V9.237h2.606 V7.011c0-2.583,1.578-3.99,3.882-3.99c1.104,0,2.053,0.082,2.329,0.119v2.7L15.296,5.84c-1.253,0-1.496,0.596-1.496,1.469v1.927 h2.989l-0.389,3.018h-2.6V20h5.097C19.506,20,20,19.506,20,18.896V1.104C20,0.494,19.506,0,18.896,0z"></path>
        </svg>
      </div>
    `;
  }

  static get properties() {
    return {
      color: {
        type: String,
        value: '#757575',
      },
      hoverColor: {
        type: String,
        value: '#325891',
      },
      size: {
        type: String,
        value: '20px',
        observer: '_size',
      },
    };
  }
  _size() {
    this.updateStyles({'--icon-size': this.size});
  }
} window.customElements.define('icon-facebook', IconFacebook);
