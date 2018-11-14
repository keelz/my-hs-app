import { combineReducers } from 'redux';
import { responsiveStateReducer as Browser } from 'redux-responsive';
import appReducer from './App';

const rootReducer = combineReducers({
  app: appReducer,
  browser: Browser,
});

export default rootReducer;
