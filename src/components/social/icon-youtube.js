import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

class IconYoutube extends PolymerElement {
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

        <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="default-color">
          <title>YouTube icon</title>
          <path fill$="[[color]]" class="a" d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
        </svg>

        <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="hover-color">
          <title>YouTube icon</title>
          <path fill$="[[hoverColor]]" class="a" d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
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
        value: '#FF000C',
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
} window.customElements.define('icon-youtube', IconYoutube);
