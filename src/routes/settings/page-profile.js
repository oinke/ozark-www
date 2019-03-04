import {createMixin} from 'polymer-redux';
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import {translations} from '../../translations/languages.js';
import '../../css/shared-styles.js';
import '../../components/layouts/main-layout.js';
import '../../components/navigation/settings-navigation.js';
import '@polymer/app-route/app-location.js';
import store from '../../global/store.js';
const ReduxMixin = createMixin(store);

class PageProfile extends ReduxMixin(PolymerElement) {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          background-color: var(--black2-white1);
          color: var(--white2-black2);
        }
        .form {
          display: block;
          margin-top: 20px;
          background-color: var(--black2-white1);
          border-radius: 3px;
        }
        .form h1 {
          font-weight: 900;
          margin: 0px;
          border-bottom: 1px solid var(--black1-white2);
          padding: 15px;
          font-size: 17px;
        }
        .form-section {
          display: flex;
          padding-bottom: 30px;
          padding-top: 30px;
          border-bottom: 1px solid var(--black1-white2);
        }
        .form-title{
          width: 200px;
          text-indent: 24px;
          font-size: 16px;
          display: none;
        }
        .form-inputs{
          flex: 1;
          padding: 12px;
        }
        .photo{
          background-color: black;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin-top: 12px;
          border: 1px solid var(--black1-white2);
        }
        .btn-right {
          display: block;
          text-align: right;
        }
        .clicky {
          cursor: pointer;
        }

        @media screen and (min-width: 900px){
          article {
            margin: 24px 12px 0 0;
          }
          .form-title {
            display: block;
          }
          input[type=text]  {
            max-width: 300px;
          }
          .form-inputs {
            padding: 0;
          }
        } 
      </style>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <main-layout narrow> 
        <div slot="aside">
          <settings-navigation></settings-navigation>
        </div>
        <div slot="body">
          <div class='form'>
            <h1>[[txt.editProfile]]</h1>
            <div class="form-section">
              <div class="form-title">[[txt.profile]]</div>
              <div class="form-inputs">
                <label class="photo-label">[[txt.photo]]</label>

                <label for="image" class="clicky">
                  <input type="file" name="image" id="image" style="display:none;" accept="image/gif, image/jpeg, image/png" on-change="_resize" value="{{file::input}}"/>
                  <img src$="https://s3-us-west-1.amazonaws.com/ozark/[[userid]]/pfp_200x200.jpg?versionId=null" class="photo">
                </label>
                
                <label>[[txt.fullName]]</label>
                <input type="text" class="text" id="newfullname" value="{{newfullname::input}}">
                <small>[[txt.yourRealName]]</small>
                <label>[[txt.username]]</label>
                <input type="text" class="text" value="{{username::input}}">
                <small>http://www.ozark.com/[[username]]</small>
                <label>[[txt.website]]</label>
                <input type="text" class="text" value="{{website::input}}">
                <label>[[txt.location]]</label>
                <input type="text" class="text" value="{{location::input}}">
                <label>[[txt.bio]]</label>
                <input id="bio" type="text" class="text" value="{{bio::input}}">
              </div>
            </div>              
            <div class="form-section">
              <div class="form-title">[[txt.account]]</div>
              <div class="form-inputs">
                <label>[[txt.email]]</label>
                <input type="text" class="text" value="{{email::input}}">
                <small>[[txt.emailWillNotBeDisplayed]]</small>
                <label>[[txt.birthday]]</label>
                <select value="{{year::input}}">
                  <option value="0">[[txt.year]]</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                  <option value="2009">2009</option>
                  <option value="2008">2008</option>
                  <option value="2007">2007</option>
                  <option value="2006">2006</option>
                  <option value="2005">2005</option>
                  <option value="2004">2004</option>
                  <option value="2003">2003</option>
                  <option value="2002">2002</option>
                  <option value="2001">2001</option>
                  <option value="2000">2000</option>
                  <option value="1999">1999</option>
                  <option value="1998">1998</option>
                  <option value="1997">1997</option>
                  <option value="1996">1996</option>
                  <option value="1995">1995</option>
                  <option value="1994">1994</option>
                  <option value="1993">1993</option>
                  <option value="1992">1992</option>
                  <option value="1991">1991</option>
                  <option value="1990">1990</option>
                  <option value="1989">1989</option>
                  <option value="1988">1988</option>
                  <option value="1987">1987</option>
                  <option value="1986">1986</option>
                  <option value="1985">1985</option>
                  <option value="1984">1984</option>
                  <option value="1983">1983</option>
                  <option value="1982">1982</option>
                  <option value="1981">1981</option>
                  <option value="1980">1980</option>
                  <option value="1979">1979</option>
                  <option value="1978">1978</option>
                  <option value="1977">1977</option>
                  <option value="1976">1976</option>
                  <option value="1975">1975</option>
                  <option value="1974">1974</option>
                  <option value="1973">1973</option>
                  <option value="1972">1972</option>
                  <option value="1971">1971</option>
                  <option value="1970">1970</option>
                  <option value="1969">1969</option>
                  <option value="1968">1968</option>
                  <option value="1967">1967</option>
                  <option value="1966">1966</option>
                  <option value="1965">1965</option>
                  <option value="1964">1964</option>
                  <option value="1963">1963</option>
                  <option value="1962">1962</option>
                  <option value="1961">1961</option>
                  <option value="1960">1960</option>
                  <option value="1959">1959</option>
                  <option value="1958">1958</option>
                  <option value="1957">1957</option>
                  <option value="1956">1956</option>
                  <option value="1955">1955</option>
                  <option value="1954">1954</option>
                  <option value="1953">1953</option>
                  <option value="1952">1952</option>
                  <option value="1951">1951</option>
                  <option value="1950">1950</option>
                  <option value="1949">1949</option>
                  <option value="1948">1948</option>
                  <option value="1947">1947</option>
                  <option value="1946">1946</option>
                  <option value="1945">1945</option>
                  <option value="1944">1944</option>
                  <option value="1943">1943</option>
                  <option value="1942">1942</option>
                  <option value="1941">1941</option>
                  <option value="1940">1940</option>
                  <option value="1939">1939</option>
                  <option value="1938">1938</option>
                  <option value="1937">1937</option>
                  <option value="1936">1936</option>
                  <option value="1935">1935</option>
                  <option value="1934">1934</option>
                  <option value="1933">1933</option>
                  <option value="1932">1932</option>
                  <option value="1931">1931</option>
                  <option value="1930">1930</option>
                  <option value="1929">1929</option>
                  <option value="1928">1928</option>
                  <option value="1927">1927</option>
                  <option value="1926">1926</option>
                  <option value="1925">1925</option>
                  <option value="1924">1924</option>
                  <option value="1923">1923</option>
                  <option value="1922">1922</option>
                  <option value="1921">1921</option>
                  <option value="1920">1920</option>
                  <option value="1919">1919</option>
                  <option value="1918">1918</option>
                  <option value="1917">1917</option>
                  <option value="1916">1916</option>
                  <option value="1915">1915</option>
                  <option value="1914">1914</option>
                  <option value="1913">1913</option>
                  <option value="1912">1912</option>
                  <option value="1911">1911</option>
                  <option value="1910">1910</option>
                  <option value="1909">1909</option>
                  <option value="1908">1908</option>
                  <option value="1907">1907</option>
                  <option value="1906">1906</option>
                  <option value="1905">1905</option>
                  <option value="1904">1904</option>
                  <option value="1903">1903</option>
                  <option value="1902">1902</option>
                  <option value="1901">1901</option>
                  <option value="1900">1900</option>
                </select>
                <select value="{{month::input}}">
                  <option value="0">[[txt.month]]</option>
                  <option value="1">[[txt.january]]</option>
                  <option value="2">[[txt.february]]</option>
                  <option value="3">[[txt.march]]</option>
                  <option value="4">[[txt.april]]</option>
                  <option value="5">[[txt.may]]</option>
                  <option value="6">[[txt.june]]</option>
                  <option value="7">[[txt.july]]</option>
                  <option value="8">[[txt.august]]</option>
                  <option value="9">[[txt.september]]</option>
                  <option value="10">[[txt.october]]</option>
                  <option value="11">[[txt.november]]</option>
                  <option value="12">[[txt.december]]</option>
                </select>
                <select value="{{day::input}}">
                  <option value="0">[[txt.day]]</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
                <div class="radio">
                <label>[[txt.gender]]</label></br>
                  <input type="radio" name="gender" value="male" id="male" checked="{{male}}" on-change="_radio">
                  <label for="male" class="side-label">[[txt.male]]</label>
                  <input type="radio" name="gender" value="female" id="female" checked="{{female}}" on-change="_radio">
                  <label for="female" class="side-label">[[txt.female]]</label>
                  <input type="radio" name="gender" value="nonbinary" id="nonbinary" checked="{{nonbinary}}" on-change="_radio">
                  <label for="nonbinary" class="side-label">[[txt.nonBinary]]</label>
                </div>
              </div> 
            </div>
            <div class="btn-right">
              <button class="flat-btn" on-click="_save">[[btntext]]</button>
            </div>
          </div>
        </div>
      </main-layout>
    `;
  }

  static get properties() {
    return {
      language: {
        type: String,
        readOnly: true,
        observer: '_language',
      },
      mode: {
        type: String,
        readOnly: true,
        observer: '_mode',
      },
      env: {
        type: Object,
        readOnly: true,
      },
      color: {
        type: Object,
        readOnly: true,
      },
      route: {
        type: Object,
        observer: '_routeChanged',
      },
      userid: {
        type: String,
      },
      btntext: {
        type: String,
        value: 'Save Profile',
      },
    };
  }

  static mapStateToProps(state, element) {
    return {
      fullname: state.fullname,
      userid: state.userid,
      language: state.language,
      mode: state.mode,
      env: state.env,
      color: state.color,
    };
  }

  _language() {
    this.txt = translations[this.language];
  }
  _resize() {
    const file = this.shadowRoot.querySelector('#image').files[0];
    if (file.type.match(/image.*/)) {
      const reader = new FileReader();
      reader.onload = (readerEvent) => {
        const image = new Image();
        image.onload = (imageEvent) => {
          const canvas = document.createElement('canvas');
          const maxSize = 200;
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
    const url = `${this.env.apiUrl}/users/profile/upload-pfp/`;
    fetch(url, {
      method: 'POST',
      body: formData,
      headers: {'Authorization': `Bearer ${token}`},
    })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          const temp = this.userid;
          console.log(temp);
          // this.dispatchAction({
          //   type: 'CHANGE_USERID',
          //   userid: '0',
          // });

          // this.dispatchAction({
          //   type: 'CHANGE_USERID',
          //   userid: temp,
          // });
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

  _radio(e) {
    this.gender = e.target.value;
  }
  _save() {
    this.btntext = this.txt.saving;
    const name = this.newfullname;
    const fullname = name.split(' ')[0];
    localStorage.setItem('fullname', fullname);
    const username = this.username;
    const website = this.website;
    const location = this.location;
    const bio = this.bio;
    const dob = `${this.day}/${this.month}/${this.year}`;
    const gender = this.gender;

    this.dispatchAction({
      type: 'CHANGE_NAME',
      fullname: fullname,
    });

    const data = {name, username, website, location, bio, dob, gender};
    const token = localStorage.getItem('jwt');
    const url = `${this.env.apiUrl}/users/profile/`;
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json'},
    })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          this.btntext = this.txt.saveProfile;
        })
        .catch((error) => console.log('Error:', error));
  }

  _routeChanged() {
    if (this.route.path == '/settings/profile/') {
      const token = localStorage.getItem('jwt');
      const url = `${this.env.apiUrl}/users/profile/`;
      fetch(url, {
        method: 'GET',
        headers: {'Authorization': `Bearer ${token}`},
      })
          .then((response) => {
            return response.json();
          })
          .then((response) => {
            if (response.name) this.newfullname = response.name;
            if (response.email) this.email = response.email;
            if (response.username) this.username = response.username;
            if (response.bio) this.bio = response.bio;
            if (response.gender) this.gender = response.gender;
            if (response.location) this.location = response.location;
            if (response.website) this.website = response.website;
            if (response.dob) {
              const dob = response.dob.split('/');
              this.day = dob[0];
              this.month = dob[1];
              this.year = dob[2];
            };
            if (response.gender) {
              if (response.gender == 'male') this.male = true;
              if (response.gender == 'female') this.female = true;
              if (response.gender == 'nonbinary') this.nonbinary = true;
            };
          })
          .catch((error) => console.log('Error:', error));
    }
  }
  _mode() {
    this.updateStyles({'--blue-color': this.color.blue});
    this.updateStyles({'--grey-color': this.color.grey});
    this.updateStyles({'--red-color': this.color.red});
    this.updateStyles({'--green-color': this.color.green});
    if (this.mode === 'light') {
      this.updateStyles({'--black1-white2': this.color.white2});
      this.updateStyles({'--black3-white3': this.color.white3});
      this.updateStyles({'--white1-black1': this.color.black1});
      this.updateStyles({'--white2-black2': this.color.black2});
      this.updateStyles({'--black3-white1': this.color.white1});
      this.updateStyles({'--black1-white2': this.color.white2});
      this.updateStyles({'--black1-white3': this.color.white3});
      this.updateStyles({'--white2-black3': this.color.black3});
      this.updateStyles({'--black2-white1': this.color.white1});
      this.updateStyles({'--black2-white3': this.color.white3});
    } else {
      this.updateStyles({'--black1-white2': this.color.black1});
      this.updateStyles({'--black3-white3': this.color.black3});
      this.updateStyles({'--white1-black1': this.color.white1});
      this.updateStyles({'--white2-black2': this.color.white2});
      this.updateStyles({'--black3-white1': this.color.black3});
      this.updateStyles({'--black1-white2': this.color.black1});
      this.updateStyles({'--black1-white3': this.color.black1});
      this.updateStyles({'--white2-black3': this.color.white2});
      this.updateStyles({'--black2-white1': this.color.black2});
      this.updateStyles({'--black2-white3': this.color.black2});
    }
  }
} window.customElements.define('page-profile', PageProfile);
