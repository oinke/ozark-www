import {createMixin} from '../../../node_modules/polymer-redux';
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import {translations} from '../../translations/languages.js';
import store from '../../global/store.js';
import '../../css/shared-styles.js';

const ReduxMixin = createMixin(store);
class SiteSearch extends ReduxMixin(PolymerElement) {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: box;
        }
        .search-box {
          margin-top: 11px;
          width: 220px;
          padding: 5px 7px 5px 27px;
          display: block;
          overflow: hidden;
          color: var(--search-color);
          line-height: 17px;
          border: 1px solid var(--border-color);
          border-radius: 3px;
          font-size: 13px;
          font-weight: 400;
          background: var(--host-search);
          margin: 12px;
        }
        .search-box:focus {
          outline: 0;
          border: 1px solid var(--active-color);
          box-shadow: none;
        }
        .search-box::placeholder{
          color: var(--placeholder-color);
        }
        .search-results{
          display: var(--show-search, none); 
          color: var(--placeholder-color);
          width: 250px;
          position: relative;
          left: 12px;
          background: var(--header-background-color);
          box-shadow: inset 0 1px 0 var(--hover-background), 0 1px 0px rgba(0,0,0,0.08), 0 2px 2px rgba(0,0,0,0.05);
          padding: 4px 0 1px 0;
        }
        
        .search-results ul{
          list-style:none;
          padding: 0px;
        }
        .search-results img {
          width: 33px;
          height: 33px;
          border-radius: 50%;
          background-color: grey;
          margin: 6px 12px 6px 0;
        }
        .container{
          display: flex;
          padding: 0 12px;
        }

        .container:hover {
          color: var(--search-color);
          background: var(--hover-background);
          cursor: pointer;
        }
        .container:active {
          color: var(--active-color);
        }

        .title {
          margin-top: 6px;
          font-size: 14px;
          font-weight: 600;
        }
        .subtitle{
          font-size: 12px;
          font-weight: 400;
        }
        .header {
          font-size: 11px;
          font-weight: 500;
          height: 15px;
          padding: 0 12px 3px 12px;
        }
      </style>
          <input class="search-box" placeholder="[[txt.search]] [[siteName]]" autocomplete="off" value="{{term::input}}" on-keydown="_search" on-blur="_close";>  
          <div class="search-results">
            <ul>
              <li class="header">Name</li>
              
              <dom-repeat items="{{results.name}}">
                <template>
                  <li class="container">
                    <img src="../../images/avatar.png">
                    <div>
                      <div class="title">[[item.title]]</div>
                      <div class="subtitle">[[item.subtitle]]</div> 
                    </div>
                  </li>
                </template>
              </dom-repeat>

            </ul>
            <ul>
              <li class="header">Email</li>
              
              <dom-repeat items="{{results.email}}">
                <template>
                  <li class="container">
                    <img src="[[item.avatar]]">
                    <div>
                      <div class="title">[[item.title]]</div>
                      <div class="subtitle">[[item.subtitle]]</div>
                    </div>
                  </li>
                </template>
              </dom-repeat>

            </ul>
          </div>
    `;
  }

  static get properties() {
    return {
      language: {
        type: Text,
        readOnly: true,
        observer: '_language',
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
      env: {
        type: Object,
        readOnly: true,
      },
      results: {
        type: Object,
        value: {'name': [{'title': 'Haisoo Shin', 'subtitle': '(haisooeller)', 'avatar': '../../images/avatar.png'}, {'title': 'Jimothy Hill', 'subtitle': '(bkawk)', 'avatar': '../../images/avatar.png'}], 'email': [{'title': 'Colin Frank', 'subtitle': '(colinator)', 'avatar': '../../images/avatar.png'}]}
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

  _close() {
    this.updateStyles({'--show-search': 'none'});
  }

  _search(e) {
    const term = this.term;
    if (e.keyCode === 13) {
      this._getUsers();
    }
    if (term && term.length > 2) {
      this._getUsers();
    }
  }

  _getUsers() {
    const url = `${this.env.apiUrl}/users/search/`;
    const term = this.term;
    const data = {term};
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'},
    })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          this.updateStyles({'--show-search': 'block'});
          this.results = response;
        });
  }

  _language(e) {
    this.txt = translations[this.language];
  }

  _mode() {
    this.updateStyles({'--placeholder-color': this.color.grey});
    this.updateStyles({'--active-color': this.color.blue});
    if (this.mode === 'light') {
      this.updateStyles({'--header-background-color': this.color.white1});
      this.updateStyles({'--host-search': `${this.color.white2} url(./images/light-search.png) 6px 6px no-repeat`});
      this.updateStyles({'--border-color': this.color.white3});
      this.updateStyles({'--search-color': this.color.black1});
      this.updateStyles({'--hover-background': this.color.white2});
    } else {
      this.updateStyles({'--header-background-color': this.color.black2});
      this.updateStyles({'--host-search': `${this.color.black1} url(./images/dark-search.png) 6px 6px no-repeat`});
      this.updateStyles({'--border-color': this.color.black3});
      this.updateStyles({'--search-color': this.color.white1});
      this.updateStyles({'--hover-background': this.color.black1});
    }
  }
} window.customElements.define('site-search', SiteSearch);
