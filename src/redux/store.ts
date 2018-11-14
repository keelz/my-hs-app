import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import { responsiveStoreEnhancer } from 'redux-responsive';
import createDebounce from 'redux-debounced';
import thunk from 'redux-thunk';
import appMiddleware from './middleware/App';
import rootReducer from './reducers';

/**
 * redux devtools implementation.
 * We want to compose our enhancers normally within the production
 * environment (build), otherwise we want to compose our ehancers
 * with the devtools extension.
 */
export const composeFunc = () => {
  return process.env.NODE_ENV === 'production'
    ? compose
    : (() => {
      const { composeWithDevTools } = require('redux-devtools-extension');
      return composeWithDevTools;
    })();
};

/**
 * Third party redux middleware
 * - redux-thunk
 * - router
 * - react-router-redux
 * - history
 * - redux-responsive
 */
const libEnhancers = [
  thunk,
  routerMiddleware(createBrowserHistory({ basename: '/' })),
  createDebounce(),
].map(mw => applyMiddleware(mw));
libEnhancers.push(responsiveStoreEnhancer);

/**
 * Custom middleware
 * - appMiddleware
 */
const customEnhancers = [
  appMiddleware,
].map(mw => applyMiddleware(mw));

// compose enhancers with composeFunc
// https://redux.js.org/api/compose
const composedEnhancers = composeFunc().apply(null, [...libEnhancers, ...customEnhancers]);

// create store
// https://redux.js.org/api/createstore
const store = createStore(rootReducer, {}, composedEnhancers);

export default store;
