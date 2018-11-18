import { combineReducers } from 'redux';
import { responsiveStateReducer as Browser } from 'redux-responsive';
import App from './App';
import Cards from './Cards';

const rootReducer = combineReducers({
  App,
  Browser,
  Cards,
});

export default rootReducer;
