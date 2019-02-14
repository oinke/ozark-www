import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

class IconTwitter extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          margin: 1px;
          margin-top: 2px;
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
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="default-color">
          <title>Twitter</title>
          <path fill$="[[color]]" d="M7.548,20c9.057,0,14.01-7.695,14.01-14.369c0-0.219,0-0.436-0.014-0.653c0.964-0.715,1.796-1.6,2.457-2.614 c-0.899,0.408-1.852,0.676-2.828,0.795c1.028-0.631,1.797-1.624,2.165-2.793c-0.967,0.588-2.024,1.003-3.127,1.226 c-1.865-2.034-4.984-2.132-6.967-0.219c-1.279,1.233-1.821,3.071-1.424,4.825C7.859,5.994,4.171,4.076,1.67,0.921 C0.363,3.229,1.031,6.181,3.195,7.663C2.411,7.639,1.645,7.422,0.96,7.03c0,0.021,0,0.042,0,0.064 c0.001,2.404,1.653,4.474,3.95,4.95c-0.725,0.203-1.486,0.232-2.223,0.087c0.645,2.057,2.494,3.466,4.6,3.507 c-1.744,1.405-3.898,2.168-6.115,2.166C0.78,17.804,0.389,17.779,0,17.732C2.252,19.214,4.872,20,7.548,19.996"></path>
        </svg>

        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="hover-color">
          <title>Twitter</title>
          <path fill$="[[hoverColor]]" d="M7.548,20c9.057,0,14.01-7.695,14.01-14.369c0-0.219,0-0.436-0.014-0.653c0.964-0.715,1.796-1.6,2.457-2.614 c-0.899,0.408-1.852,0.676-2.828,0.795c1.028-0.631,1.797-1.624,2.165-2.793c-0.967,0.588-2.024,1.003-3.127,1.226 c-1.865-2.034-4.984-2.132-6.967-0.219c-1.279,1.233-1.821,3.071-1.424,4.825C7.859,5.994,4.171,4.076,1.67,0.921 C0.363,3.229,1.031,6.181,3.195,7.663C2.411,7.639,1.645,7.422,0.96,7.03c0,0.021,0,0.042,0,0.064 c0.001,2.404,1.653,4.474,3.95,4.95c-0.725,0.203-1.486,0.232-2.223,0.087c0.645,2.057,2.494,3.466,4.6,3.507 c-1.744,1.405-3.898,2.168-6.115,2.166C0.78,17.804,0.389,17.779,0,17.732C2.252,19.214,4.872,20,7.548,19.996"></path>
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
        value: '#00A3EE',
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
} window.customElements.define('icon-twitter', IconTwitter);
