import {createMixin} from '../../node_modules/polymer-redux';
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {translations} from '../translations/languages.js';
import store from '../global/store.js';
import '../css/shared-styles.js';
import '../components/loading/loading-circular.js';

const ReduxMixin = createMixin(store);
class MainProfile extends ReduxMixin(PolymerElement) {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          color: var(--white2-black2);
        }
        .header{
          margin: 12px;
          display: block;
          height: 350px;
          background-color: var(--black2-white1);
          padding: 12px;
          border-radius: 3px;
        }
        button {
          margin-top: 12px;
          background-color: var(--black2-white1);
          border: 1px solid var(--grey-color);
          color: var(--grey-color);
          border-radius: 4px;
          width: 150px;
          height: 40px;
          font-weight: 600;
          font-size: 13px;
          cursor: pointer;
        }
        .cover-image{
          display: block;
          height: 150px;
          background-color: var(--black1-white2) !important;
          background-image: url('https://s3-us-west-1.amazonaws.com/ozark/5c6bb18d0198f0cc1cc25627/cover_1160x150.png');
          background-size: 1160px 150px;
        }
        .cover-header{
          display: flex;
        }
        .flex{
          flex: 1;
        }
        .cover-button{
          margin: 12px;
          cursor: pointer;
        }
        .cover-layout{
          display: flex;
        }
        .cover-layout div{
          flex: 1;
          height: 100px;
        }
        .center{
          text-align: center;
          display: block;
        }
        .profile-pic {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 1px solid var(--black1-white2);
          background-color: var(--black1-white2) !important;
          background-image: url('https://s3-us-west-1.amazonaws.com/ozark/5c6bb18d0198f0cc1cc25627/pfp_200x200.jpg');
          background-size: 100px 100px;
          display: block;
          margin: 0 auto;
          position: relative;
          top: -50px;
        }
        .profile-name {
          position: relative;
          top: -60px;
          font-size: 32px;
          font-weight: 500;
          display: block;
          line-height: 40px;
        }
        .right{
          text-align: right;
        }
        .vertical-layout{
          text-align: center;
        }
        .top-line span:nth-child(-n+2){
          margin-right: 48px;
        }
        .top-line {
          margin: 24px 0 12px 0;
        }
        .bottom-cover{
          margin: 12px 0;
          color: var(--grey-color);
        }
        .bottom-cover strong {
          color: var(--white2-black2);
        }
        .gap {
          margin-right: 24px;
        }
      </style>
        <div class="header">
          <div class="cover-image">
            <div class="cover-header">
              <div class="flex"></div>
              <div class="cover-button">
                <svg width="28px" height
                cursor: pointer;="28px" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                        <path d="M14,2 C8.5,2 4,6.5 4,12 C4,17.5 8.5,22 14,22 C19.5,22 24,17.5 24,12 C24,6.5 19.5,2 14,2 Z M19,12.8 C19,12.9 18.9,13 18.8,13 L15,13 L15,16.8 C15,16.9 14.9,17 14.8,17 L13.2,17 C13.1,17 13,16.9 13,16.8 L13,13 L9.2,13 C9.1,13 9,12.9 9,12.8 L9,11.2 C9,11.1 9.1,11 9.2,11 L13,11 L13,7.2 C13,7.1 13.1,7 13.2,7 L14.8,7 C14.9,7 15,7.1 15,7.2 L15,11 L18.8,11 C18.9,11 19,11.1 19,11.2 L19,12.8 Z" id="path-1"></path>
                        <filter x="-35.0%" y="-25.0%" width="170.0%" height="170.0%" filterUnits="objectBoundingBox" id="filter-2">
                            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                            <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                        </filter>
                    </defs>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Shape" fill-rule="nonzero">
                            <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
                            <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-1"></use>
                        </g>
                    </g>
                </svg>
              </div>
            </div>

          </div>
          <div class="cover-layout">
              <div>
                <button>Share Profile</button>
              </div>
              <div class="center">
                <div class="profile-pic"></div>  
                <h1 class="profile-name">Will Hill</h1>
              </div>
              <div class="right">
                <button>Edit Profile</button>
              </div>
            </div>
            <div class="vertical-layout">
          <div class="top-line">

              <span>bkawk</span>
              <span>China</span>
              <span>www.bkawk.com</span>
    
          </div>
          <div> Javascript developer focused on Polymer, Ethereum, EOS, IPFS</div>
          <div class="bottom-cover"> Followers <strong class="gap">740</strong> Following <strong>90</strong></div>
        </div>
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

  _language(e) {
    this.txt = translations[this.language];
  }

  _mode() {
    this.updateStyles({'--blue-color': this.color.blue});
    this.updateStyles({'--grey-color': this.color.grey});
    this.updateStyles({'--red-color': this.color.red});
    this.updateStyles({'--green-color': this.color.green});
    if (this.mode === 'light') {
      this.updateStyles({'--black2-white1': this.color.white1});
      this.updateStyles({'--black3-white3': this.color.white3});
      this.updateStyles({'--white1-black1': this.color.black1});
      this.updateStyles({'--white2-black2': this.color.black2});
      this.updateStyles({'--black3-white1': this.color.white1});
      this.updateStyles({'--black1-white2': this.color.white2});
      this.updateStyles({'--black1-white3': this.color.white3});
      this.updateStyles({'--white2-black3': this.color.black3});
      this.updateStyles({'--white3-black3': this.color.black3});
    } else {
      this.updateStyles({'--black2-white1': this.color.black2});
      this.updateStyles({'--black3-white3': this.color.black3});
      this.updateStyles({'--white1-black1': this.color.white1});
      this.updateStyles({'--white2-black2': this.color.white2});
      this.updateStyles({'--black3-white1': this.color.black3});
      this.updateStyles({'--black1-white2': this.color.black1});
      this.updateStyles({'--black1-white3': this.color.black1});
      this.updateStyles({'--white2-black3': this.color.white2});
      this.updateStyles({'--white3-black3': this.color.white3});
    }
  }
} window.customElements.define('main-profile', MainProfile);
