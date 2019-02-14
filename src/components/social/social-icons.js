import {createMixin} from '../../../node_modules/polymer-redux';
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import store from '../../global/store.js';
import '../../css/shared-styles.js';

import './icon-facebook.js';
import './icon-instagram.js';
import './icon-linkedin.js';
import './icon-medium.js';
import './icon-pinterest.js';
import './icon-steemit.js';
import './icon-telegram.js';
import './icon-tumblr.js';
import './icon-twitch.js';
import './icon-twitter.js';
import './icon-youtube.js';

const ReduxMixin = createMixin(store);
class SocialIcons extends ReduxMixin(PolymerElement) {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: box;
          background-color: var(--header-background-color);
          box-shadow: inset 0 1px 0 var(--header-background-color), 0 1px 0px rgba(0,0,0,0.08), 0 2px 2px rgba(0,0,0,0.05);
          z-index: 8888;
        }
        ul li {
          display:inline;
          margin-right:5px;
        }
        ul {
          display: flex;
          padding: 0;
          margin-right: 12px;
        }
      </style>
 
        <div>
          <ul>
            <template is="dom-if" if="[[env.social.facebook]]">
              <li><a href="[[env.social.facebook]]" target="_blank" id="Facebook"><icon-facebook size="15px"></icon-facebook></a></li>
            </template>
            <template is="dom-if" if="[[env.social.instagram]]">
              <li><a href="[[env.social.instagram]]" target="_blank" id="Instagram"><icon-instagram size="15px"></icon-instagram></a></li>
            </template>
            <template is="dom-if" if="[[env.social.linkedin]]">
              <li><a href="[[env.social.linkedin]]" target="_blank" id="Linkedin"><icon-linkedin size="15px"></icon-linkedin></a></li>
            </template>
            <template is="dom-if" if="[[env.social.medium]]">
              <li><a href="[[env.social.medium]]" target="_blank" id="Medium"><icon-medium size="15px"></icon-medium></a></li>
            </template>
            <template is="dom-if" if="[[env.social.pinterest]]">
              <li><a href="[[env.social.pinterest]]" target="_blank" id="Pinterest"><icon-pinterest size="15px"></icon-pinterest></a></li>
            </template>
            <template is="dom-if" if="[[env.social.steemit]]">
              <li><a href="[[env.social.steemit]]" target="_blank" id="Steemit"><icon-steemit size="15px"></icon-steemit></a></li>
            </template>
            <template is="dom-if" if="[[env.social.telegram]]">
              <li><a href="[[env.social.telegram]]" target="_blank" id="Telegram"><icon-telegram size="15px"></icon-telegram></a></li>
            </template>
            <template is="dom-if" if="[[env.social.tumblr]]">
              <li><a href="[[env.social.tumblr]]" target="_blank" id="Tumblr"><icon-tumblr size="15px"></icon-tumblr></a></li>
            </template>
            <template is="dom-if" if="[[env.social.twitch]]">
              <li><a href="[[env.social.twitch]]" target="_blank" id="Twitch"><icon-twitch size="15px"></icon-twitch></a></li>
            </template>
            <template is="dom-if" if="[[env.social.twitter]]">
              <li><a href="[[env.social.twitter]]" target="_blank" id="Twitter"><icon-twitter size="15px"></icon-twitter></a></li>
            </template>
            <template is="dom-if" if="[[env.social.youtube]]">
              <li><a href="[[env.social.youtube]]" target="_blank" id="YouTube"><icon-youtube size="15px"></icon-youtube></a></li>
            </template>
          </ul>
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
      env: {
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
      env: state.env,
    };
  }
} window.customElements.define('social-icons', SocialIcons);
