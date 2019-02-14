import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

class IconTelegram extends PolymerElement {
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
          <title>Telegram icon</title>
          <path fill$="[[color]]" d="M9.028 20.837c-.714 0-.593-.271-.839-.949l-2.103-6.92L22.263 3.37"/>
          <path fill$="[[color]]" d="M9.028 20.837c.552 0 .795-.252 1.105-.553l2.941-2.857-3.671-2.214"/>
          <path fill$="[[color]]" d="M9.403 15.213l8.89 6.568c1.015.56 1.748.271 2-.942l3.62-17.053c.372-1.487-.564-2.159-1.534-1.72L1.125 10.263c-1.45.582-1.443 1.392-.264 1.753l5.455 1.7L18.94 5.753c.595-.36 1.143-.167.694.232"/>
        </svg>

        <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="hover-color">
          <title>Telegram icon</title>
          <path fill$="[[hoverColor]]" d="M9.028 20.837c-.714 0-.593-.271-.839-.949l-2.103-6.92L22.263 3.37"/>
          <path fill$="[[hoverColor]]" d="M9.028 20.837c.552 0 .795-.252 1.105-.553l2.941-2.857-3.671-2.214"/>
          <path fill$="[[hoverColor]]" d="M9.403 15.213l8.89 6.568c1.015.56 1.748.271 2-.942l3.62-17.053c.372-1.487-.564-2.159-1.534-1.72L1.125 10.263c-1.45.582-1.443 1.392-.264 1.753l5.455 1.7L18.94 5.753c.595-.36 1.143-.167.694.232"/>
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
        value: '#4DBCED',
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
} window.customElements.define('icon-telegram', IconTelegram);
