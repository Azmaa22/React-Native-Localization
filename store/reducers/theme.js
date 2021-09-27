import {CHANGE_TO_DARK_MODE, CHANGE_TO_LIGHT_MODE} from '../actions/theme';

const initialState = {
  isDark: false,
};
const ThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TO_LIGHT_MODE: {
      return {...state, isDark: action.payload};
      break;
    }
    case CHANGE_TO_DARK_MODE: {
        return {...state, isDark: action.payload};
        break;
      }
    default :{
        return state;
        break
    }  
  }
};

export default ThemeReducer;
