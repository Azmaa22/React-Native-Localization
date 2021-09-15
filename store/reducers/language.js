import {
  CHANGE_TO_ARABIC,
  CHANGE_TO_ENGLISH,
  CHANGE_TO_FRANCE,
} from '../actions/language';

const initialState = {
  language: 'en',
};

export const LanguageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TO_ARABIC:
      console.log('labguage from reducer', action.payload);
      const t ={...state, language: action.payload}
      console.log('ddd',t.language);
      return {...state, language: action.payload};
      break;
    case CHANGE_TO_ENGLISH:
      return {...state, language: action.payload};
      break;
    case CHANGE_TO_FRANCE:
      return {...state, language: action.payload};
      break;
    default:
      return state;
      break;
  }
};

export default LanguageReducer;