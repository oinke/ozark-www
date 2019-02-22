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

let mode;
if (localStorage.getItem('mode')) {
  mode = localStorage.getItem('mode');
} else {
  mode = 'light';
  localStorage.setItem('mode', 'light');
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

const initial = {
  fullname: fullname,
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
    case 'CHANGE_USERID':
      return Object.assign({}, state, {
        userid: action.userid,
      });
    default:
      return state;
  }
};
