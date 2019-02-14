const savedLanguage = localStorage.getItem('language') || 'English';
const savedMode = localStorage.getItem('mode') || 'light';
import {env} from '../../env.js';

const initial = {
  language: savedLanguage,
  mode: savedMode,
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
    default:
      return state;
  }
};
