import {createMixin} from 'polymer-redux';
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '../../css/shared-styles.js';
import '../../components/main-layout.js';
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
          background-color: var(--header-background-color);
          color: var(--host-color);
        }
        *{
          outline:0
        }
        article {
          margin-bottom: 100px;
        }
        article a {
          color: var(--host-color);
        }
        article h1 {
          font-size: 35px;
          font-weight: 300;
        }
        article h3 {
          font-size: 18px;
          font-weight: 300;
        }
        article p {
          font-size: 14px;
          line-height:1.5em;
          margin-bottom:20px;
        }
        article h1 {
          font-size: 24px;
          font-weight: 300;
          margin: 0px;
          border-bottom: 1px solid var(--input-background);
          padding: 15px;
        }
        hr {
          width: 100%;
          display: block;
          height: 5px;
          border: 0px;
          border-bottom: 1px solid var(--input-background);
        }
        .container {
          display: flex;
          margin-top: 30px;
          margin-bottom: 30px;
          
        }
        .title{
          width: 250px;
          text-indent: 24px;
          font-size: 15px;
          display: none;
        }

        article {
          margin-top: 24px;
          padding-bottom: 1px;
          background-color: var(--header-background-color);
          display: block;
          border-radius: 3px;
        }
        label, input, small{
          display: block;
        }
        label {
          display: block;
          font-size: 12px;
          font-weight: bold;
          padding: 17px 0 7px;
          max-width: 340px;
        }
        input[type=text]  {
          width:100%;
          padding: 8px;
          display: block;
          overflow: hidden;
          color: var(--input-color);
          line-height: 17px;
          border: 1px solid var(--border-color);
          border-radius: 3px;
          font-size: 14px;
          font-weight: 400;
          background: var(--input-background);
          box-sizing: border-box;
        }
        input:focus {
          outline: 0;
          border: 1px solid var(--active-color);
          box-shadow: none;
        }
        .inputs{
          flex: 1;
          padding: 12px;
        }
        .comment {
          margin: 6px 0 0 0;
          font-size: 12px;
          display: block;
          color: var(--grey-color);
          line-height: 1.5em;
        }
        .radio label {
          display: inline-block;
          margin-right: 12px;
          padding: 4px;
        }
        input[type=radio]{
          display: inline-block;
        }
        .profile-photo{
          background-color: black;
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }
        .photo-label{
          margin-bottom: 12px;
        }
        .gender{
          margin-top:24px;
        }
        .btn-save{
          display: block;
          width: 100%;
          font-weight: bold;
          padding: 0 12px;
          line-height: 36px;
          font-size: 14px;
          border: 1px solid;
          border-radius: 3px;
          color: var(--btn-text);
          text-shadow: 0 1px 0 var(--btn-top);
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
          border-color: var(--btn-border);
          background: var(--btn-bottom);
          background: -webkit-linear-gradient(top, var(--btn-top), var(--btn-bottom));
          background: -ms-linear-gradient(top, var(--btn-top), var(--btn-bottom));
          background: -moz-linear-gradient(top, var(--btn-top), var(--btn-bottom));
          background: -o-linear-gradient(top, var(--btn-top), var(--btn-bottom));
          margin: 12px 0 24px 0;
          cursor: pointer;
          margin: 12px;
          max-width: 200px;
        }

        .btn-box {
          display: flex !important;
          display: block;
          text-align: right;
        }
        .btn-box button{
          width: 200px;
        }
        .delete-account{
          flex: 1;
        }
        .save-button-box{
          flex: 1;
          max-width: 230px;
        }
        @media screen and (min-width: 900px){
          article {
            margin: 24px 12px 0 0;
          }
          .title {
            display: block;
          }
          input[type=text]  {
            max-width: 300px;
          }
          .inputs {
            padding: 0;
          }
        } 
      </style>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <main-layout> 
          <div slot="aside">
          <settings-navigation></settings-navigation>
          </div>
          <div slot="body">
            <article>
              <h1>Edit Profile</h1>
              <div class="container">
                <div class="title">Profile</div>
                <div class="inputs">
                  <label class="photo-label">Photo</label>
                  <img src="https://s3-us-west-1.amazonaws.com/ozark/5c6bb18d0198f0cc1cc25627/pfp_200x200.jpg" class="profile-photo">
                  <!-- <input id="name" name="setting-fullname" type="file" class="text" value=""> -->
                  <small class="comment">Delete Photo</small>
                  
                  <label>Full Name</label>
                  <input id="name" type="text" class="text" value="{{name::input}}">
                  <small class="comment">Your real name, so your friends can find you.</small>

                  <label>Username</label>
                  <input id="username" type="text" class="text" value="{{username::input}}">
                  <small class="comment">http://www.ozark.com/[[username]]</small>

                  <label>Website</label>
                  <input id="website" type="text" class="text" value="{{website::input}}">

                  <label>Location</label>
                  <input id="location" type="text" class="text" value="{{location::input}}">

                  <label>Bio</label>
                  <input id="bio" type="text" class="text" value="{{bio::input}}">
            
                </div>
              </div>
              <hr/>
              <div class="container">
              
                <div class="title">Account</div>
                <div class="inputs">
                
                  <label>Email Address</label>
                  <input id="email" type="text" class="text" value="{{email::input}}">
                  <small class="comment">Email will not be publicly displayed.</small>

                  <label>Birthday</label>
                  <select id="birthday_year" class="select-box" value="{{year::input}}">
                    <option value="0">Year</option>
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
          <select id="birthday_month" class="select-boxes" value="{{month::input}}">
            <option value="0">Month</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
					</select>
          <select id="birthday_day" class="select-boxes" value="{{day::input}}">
            <option value="0">Day</option>
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
          <label class="gender">Gender</label></br>
            <radiogroup value="{{gender::input}}">
              <input type="radio" name="gender" value="male" id="male" checked="{{male}}" on-change="_radio">
              <label for="male" class="label">Male</label>
              <input type="radio" name="gender" value="female" id="female" checked="{{female}}" on-change="_radio">
              <label for="female" class="label">Female</label>
              <input type="radio" name="gender" value="nonbinary" id="nonbinary" checked="{{nonbinary}}" on-change="_radio">
              <label for="non-binary" class="label">Non-binary</label>
            </radiogroup>
          </div>
         
                </div> 
              </div><hr/>
              <div class="btn-box">
                <div class="delete-account"></div>
                <div class="save-button-box"><button class="btn-save" on-click="_save">Save Profile</button></div>
              </div>
            </article>
          </div>
      </main-layout>
    `;
  }

  static get properties() {
    return {
      language: {
        type: String,
        readOnly: true,
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
    };
  }

  static mapStateToProps(state, element) {
    return {
      language: state.language,
      mode: state.mode,
      env: state.env,
      color: state.color,
    };
  }

  _radio(e) {
    this.gender = e.target.value;
  }
  _save() {
    const name = this.name;
    const username = this.username;
    const website = this.website;
    const location = this.location;
    const bio = this.bio;
    const dob = `${this.day}/${this.month}/${this.year}`;
    const gender = this.gender;
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

        })
        .catch((error) => console.log('Error:', error));
  }

  _routeChanged() {
    if (this.route.path == '/settings/profile/') {
      const token = localStorage.getItem('jwt');
      const url = `${this.env.apiUrl}/users/profile/`;
      fetch(url, {
        method: 'GET',
        headers: {'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json'},
      })
          .then((response) => {
            return response.json();
          })
          .then((response) => {
            if (response.name) this.name = response.name;
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
    this.updateStyles({'--active-color': this.color.blue});
    this.updateStyles({'--grey-color': this.color.grey});
    this.updateStyles({'--error-color': this.color.red});
    this.updateStyles({'--green-color': this.color.green});
    if (this.mode === 'light') {
      this.updateStyles({'--input-background': this.color.white2});
      this.updateStyles({'--border-color': this.color.white3});
      this.updateStyles({'--input-color': this.color.black1});
      this.updateStyles({'--host-color': this.color.black2});
      this.updateStyles({'--btn-top': this.color.white1});
      this.updateStyles({'--btn-bottom': this.color.white2});
      this.updateStyles({'--btn-border': this.color.white3});
      this.updateStyles({'--btn-text': this.color.black3});
      this.updateStyles({'--header-background-color': this.color.white1});
    } else {
      this.updateStyles({'--input-background': this.color.black1});
      this.updateStyles({'--border-color': this.color.black3});
      this.updateStyles({'--input-color': this.color.white1});
      this.updateStyles({'--host-color': this.color.white2});
      this.updateStyles({'--btn-top': this.color.black3});
      this.updateStyles({'--btn-bottom': this.color.black1});
      this.updateStyles({'--btn-border': this.color.black1});
      this.updateStyles({'--btn-text': this.color.white2});
      this.updateStyles({'--header-background-color': this.color.black2});
    }
  }
} window.customElements.define('page-profile', PageProfile);
