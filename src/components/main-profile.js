import {createMixin} from '../../node_modules/polymer-redux';
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {translations} from '../translations/languages.js';
import store from '../global/store.js';
import '@polymer/app-route/app-location.js';
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
          width: 100px;
          height: 40px;
          font-weight: 600;
          font-size: 13px;
          cursor: pointer;
        }
        .cover-image{
          display: block;
          height: 150px;
          background-color: var(--black1-white2) !important;
          background-image: var(--user-pfb);
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
          background-image: var(--user-pfp);
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
        .top-line span:{
          margin-right: 24px;
          margin-left: 24px;
        }
        .top-line {
          margin: 24px 0 12px 0;
        }
        .bottom-cover{
          margin: 12px 0;
          color: var(--grey-color);
        }
        .bottom-cover a{
          cursor: pointer;
        }
        .bottom-cover strong {
          color: var(--white2-black2);
        }
        .gap {
          margin-right: 24px;
        }
        .clicky {
          margin: 0px;
        }
        .following{
          margin-top: 6px;
        }
        .container{
          display: flex;
          flex-wrap: wrap;
          margin: 12px;
          cursor: pointer;
        }
        .miniProfile {
          height: 135px;
          width: 250px;
          background-color: var(--black2-white1);
          margin-right: 12px;
          padding: 12px;
        }
        .profile {
          border-radius: 50%;
          width: 50px;
          height: 50px;
          position: relative;
          top: -27px;
          left: 10px;
        }
        .mini-name {
          font-size: 18px;
          margin: 0;
          text-transform: capitalize;
          margin-bottom: 4px;
        }
        .profilebg{
          max-width: 250px;
        }
        .mobile-small{
            display: none;
          }
        span {
          display: inline-block;
        }
        @media screen and (min-width: 900px){
          .mobile-small{
            display: inline;
          }
          button {
            width: 150px;
          }
        } 
      </style>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
        <div class="header">
          <div class="cover-image">
            <div class="cover-header">
              <div class="flex"></div>
              <template is="dom-if" if="{{profile.isMine}}">
                <label for="image" class="clicky">
                  <input type="file" name="image" id="image" style="display:none;" accept="image/gif, image/jpeg, image/png" on-change="_resize" value="{{file::input}}"/>
                    <div class="cover-button">
                    <svg width="28px" cursor: pointer;="28px" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
                </label>
              </template>
            </div>
          </div>
          <div class="cover-layout">
              <div>
              <template is="dom-if" if="{{!profile.isMine}}">

                <template is="dom-if" if="{{!profile.imFollowing}}">
                  <button on-click="_follow">Follow</button>
                </template>
                <template is="dom-if" if="{{profile.imFollowing}}">
                  <button on-click="_unfollow">Unfollow</button>
                </template>

              </template>
              <template is="dom-if" if="{{profile.isMine}}">
                <button on-click="_share">Share<span class="mobile-small"> Profile</span></button>
              </template>
                
              </div>
              <div class="center">
                <div class="profile-pic"></div>  
                <h1 class="profile-name">[[profile.name]]</h1>
              </div>
              <div class="right">
                <template is="dom-if" if="{{!profile.isMine}}">
                  <button>Message</button>
                </template>
                <template is="dom-if" if="{{profile.isMine}}">
                  <button on-click="_editProfile">Edit<span class="mobile-small"> Profile</span></button>
                </template>
              </div>
            </div>
            <div class="vertical-layout">
            <div class="following">[[_lastSeen(profile.followerSince)]]</div>
          <div class="top-line">
            <template is="dom-if" if="{{profile.username}}"><span>@[[profile.username]]</span></template>
            <template is="dom-if" if="{{profile.location}}"><span>[[profile.location]]</span></template>
            <template is="dom-if" if="{{profile.website}}"><span>[[profile.website]]</span></template>
          </div>
          <div class="bottom-cover"> 
            <a on-click="_followers">Followers <strong class="gap">[[profile.followers]]</strong></a>
            <a on-click="_following">Following <strong>[[profile.following]]</strong></a>
          </div>
        </div>
        </div>

        <div class="container">
          <template is="dom-if" if="{{showFollowers}}">
            <dom-repeat items="{{followers}}">
              <template>
                <div class="miniProfile" id="[[item.username]]" on-click="_goToProfile">
                <img src$="https://s3-us-west-1.amazonaws.com/ozark/{{item.userid}}/pfb_300x39.jpg" class="profilebg">
                <img src$="https://s3-us-west-1.amazonaws.com/ozark/{{item.userid}}/pfp_200x200.jpg" class="profile">
                <p class="mini-name">[[item.name]]</p>
                  <!-- [[item.since]] -->
                  @[[item.username]]
                </div>
              </template>
            </dom-repeat> 
          </template>
          <template is="dom-if" if="{{showFollowing}}">
            <dom-repeat items="{{following}}">
              <template>
                <div class="miniProfile">
                <img src$="https://s3-us-west-1.amazonaws.com/ozark/{{item.userid}}/pfb_300x39.jpg" class="profilebg">
                <img src$="https://s3-us-west-1.amazonaws.com/ozark/{{item.userid}}/pfp_200x200.jpg" class="profile">
                <p class="mini-name">[[item.name]]</p>
                  <!-- [[item.since]] -->
                  @[[item.username]]
                </div>
              </template>
            </dom-repeat> 
          </template>
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
      route: {
        type: Object,
        observer: '_routeChanged',
      },
      profile: {
        type: Object,
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

  _goToProfile(e) {
    const username = e.model.__data.item.username;
    this.showFollowers = false;
    this.showFollowing = false;
    this.set('route.path', `./${username}`);
  }
  _followers() {
    const token = localStorage.getItem('jwt');
    const url = `${this.env.apiUrl}/users/profile/id/followers/?username=${this.profile.username}`;
    fetch(url, {
      method: 'GET',
      headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
    })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          console.log(response);
          this.followers = response.followers;
          this.showFollowers = true;
          this.showFollowing = false;
        })
        .catch((error) => console.log('Error:', error));
  }

  _following() {
    const token = localStorage.getItem('jwt');
    const url = `${this.env.apiUrl}/users/profile/id/following/?username=${this.profile.username}`;
    fetch(url, {
      method: 'GET',
      headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
    })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          console.log(response);
          this.following = response.following;
          this.showFollowers = false;
          this.showFollowing = true;
        })
        .catch((error) => console.log('Error:', error));
  }

  _lastSeen(epochTime) {
    if (epochTime) {
      let lastSeen = 'Began following you ';
      const currentTime = Date.now();
      const elapsed = currentTime - epochTime;
      const toMins = (mins) => Math.floor((mins/1000)/60);
      const toHours = (hours) => Math.floor(toMins(hours)/60);
      const toDays = (days) => Math.floor(toHours(days)/24);
      elapsed < 120000 ? lastSeen += 'moments ago'
      : elapsed < 3600000 ? lastSeen += toMins(elapsed) + ' minutes ago.'
      : elapsed < 7000000 ? lastSeen += '1 hour ago'
      : elapsed < 86400000 ? lastSeen += toHours(elapsed) + ' hours ago.'
      : elapsed < 172000000 ? lastSeen += '1 day ago'
      : lastSeen += toDays(elapsed) + ' days ago';
      return lastSeen;
    }
  }

  _routeChanged() {
    this.showFollowers = false;
    this.showFollowing = false;
    const page = this.route.path.split('/')[1];
    if (page != 'settings') {
      const token = localStorage.getItem('jwt');
      const url = `${this.env.apiUrl}/users/profile/id?username=${page}`;
      fetch(url, {
        method: 'GET',
        headers: {'Authorization': `Bearer ${token}`},
      })
          .then((response) => {
            return response.json();
          })
          .then((response) => {
            this.profile = response;
            console.log(response.thumbnail);
            this.updateStyles({'--user-pfp': `url('https://s3-us-west-1.amazonaws.com/ozark/${response.id}/pfp_200x200.jpg')`});
            this.updateStyles({'--user-pfb': `url('https://s3-us-west-1.amazonaws.com/ozark/${response.id}/pfb_1160x150.jpg')`});
          })
          .catch((error) => console.log('Error:', error));
    }
  }

  _follow() {
    const token = localStorage.getItem('jwt');
    const url = `${this.env.apiUrl}/users/profile/follow/`;
    const username = this.profile.username;
    const data = {username};
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
    })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          this.profile = response;
        })
        .catch((error) => console.log('Error:', error));
  }

  _unfollow() {
    const token = localStorage.getItem('jwt');
    const url = `${this.env.apiUrl}/users/profile/unfollow/`;
    const username = this.profile.username;
    const data = {username};
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
    })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          this.profile = response;
        })
        .catch((error) => console.log('Error:', error));
  }

  _resize() {
    const file = this.shadowRoot.querySelector('#image').files[0];
    if (file.type.match(/image.*/)) {
      const reader = new FileReader();
      reader.onload = (readerEvent) => {
        const image = new Image();
        image.onload = (imageEvent) => {
          const canvas = document.createElement('canvas');
          const maxSize = 1160;
          let width = image.width;
          let height = image.height;
          if (width > height) {
            if (width > maxSize) {
              height *= maxSize / width;
              width = maxSize;
            }
          } else {
            if (height > maxSize) {
              width *= maxSize / height;
              height = maxSize;
            }
          }
          canvas.width = width;
          canvas.height = height;
          canvas.getContext('2d').drawImage(image, 0, 0, width, height);
          const dataUrl = canvas.toDataURL('image/jpeg');
          const resizedImage = this._dataURLToBlob(dataUrl);
          this._upload(resizedImage);
        };
        image.src = readerEvent.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  _upload(file) {
    const formData = new FormData();
    formData.append('image', file);
    const token = localStorage.getItem('jwt');
    const url = `${this.env.apiUrl}/users/profile/upload-pfb/`;
    fetch(url, {
      method: 'POST',
      body: formData,
      headers: {'Authorization': `Bearer ${token}`},
    })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          this.random = Math.floor(Math.random() * 9000000000) + 1000000000;
          this.updateStyles({'--user-pfb': `url('https://s3-us-west-1.amazonaws.com/ozark/${response.id}/pfb_1160x150.jpg?versionId=null&rand=${this.random}')`});
        })
        .catch((error) => console.log('Error:', error));
  }

  _dataURLToBlob(dataURL) {
    const BASE64_MARKER = ';base64,';
    if (dataURL.indexOf(BASE64_MARKER) == -1) {
      const parts = dataURL.split(',');
      const contentType = parts[0].split(':')[1];
      const raw = parts[1];
      return new Blob([raw], {type: contentType});
    }
    const parts = dataURL.split(BASE64_MARKER);
    const contentType = parts[0].split(':')[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;
    const uInt8Array = new Uint8Array(rawLength);
    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], {type: contentType});
  }
  _language(e) {
    this.txt = translations[this.language];
  }

  _editProfile() {
    this.set('route.path', './settings/profile/');
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
