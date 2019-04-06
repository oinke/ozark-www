let loggedin;
if (localStorage.getItem('loggedin')) {
  if (localStorage.getItem('loggedin') === 'true') {
    loggedin = true;
  } else {
    loggedin = false;
  }
} else {
  loggedin = false;
  localStorage.setItem('loggedin', 'false');
}
let username;
if (localStorage.getItem('username')) {
  username = localStorage.getItem('username');
}

let mode;
if (localStorage.getItem('mode')) {
  mode = localStorage.getItem('mode');
} else {
  mode = 'light';
  localStorage.setItem('mode', 'light');
}
if (mode == 'dark') {
  document.body.style.backgroundColor = '#121212';
} else {
  document.body.style.backgroundColor = '#EEEEEE';
}

let fullname;
if (localStorage.getItem('fullname')) {
  fullname = localStorage.getItem('fullname');
}

let language;
if (localStorage.getItem('language')) {
  language = localStorage.getItem('language');
} else {
  language = 'English';
  localStorage.setItem('language', 'English');
}

const userid = localStorage.getItem('id');
import {env} from '../../env.js';

const notifications = [];
const messages = [];

const initial = {
  notifications: notifications,
  messages: messages,
  fullname: fullname,
  username: username,
  userid: userid,
  language: language,
  mode: mode,
  env: env,
  color: {
    black1: '#121212',
    black2: '#232323',
    black3: '#303030',
    blue: '#0064B5',
    red: '#B50000',
    green: '#00B54D',
    grey: '#757575',
    white3: '#D1D1D1',
    white2: '#EEEEEE',
    white1: '#FFFFFF',
  },
  loggedin: loggedin,
};

export default (state = initial, action) => {
  switch (action.type) {
    case 'CHANGE_LANGUAGE':
      return Object.assign({}, state, {
        language: action.language,
      });
    case 'CHANGE_MODE':
      return Object.assign({}, state, {
        mode: action.mode,
      });
    case 'CHANGE_STATUS':
      return Object.assign({}, state, {
        loggedin: action.loggedin,
      });
    case 'CHANGE_NAME':
      return Object.assign({}, state, {
        fullname: action.fullname,
      });
    case 'CHANGE_USERNAME':
      return Object.assign({}, state, {
        username: action.username,
      });
    case 'CHANGE_USERID':
      return Object.assign({}, state, {
        userid: action.userid,
      });
    case 'CHANGE_MESSAGES':
      return Object.assign({}, state, {
        messages: action.messages,
      });
    case 'CHANGE_NOTIFICATIONS':
      return Object.assign({}, state, {
        notifications: action.notifications,
      });
    default:
      return state;
  }
};
