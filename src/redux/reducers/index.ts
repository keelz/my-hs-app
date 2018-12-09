import { combineReducers } from 'redux';
import { responsiveStateReducer as Browser } from 'redux-responsive';
import App from './App';
import Cards from './Cards';
import Collection from './Collection';

const rootReducer = combineReducers({
  App,
  Browser,
  Cards,
  Collection,
});

export default rootReducer;
