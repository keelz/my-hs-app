import { combineReducers } from 'redux';
import { responsiveStateReducer as Browser } from 'redux-responsive';
import App from './App';

const rootReducer = combineReducers({
  App,
  Browser,
});

export default rootReducer;
