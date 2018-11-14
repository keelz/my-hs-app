import { MiddlewareAPI, Dispatch, Middleware } from 'redux';
import { ActionType, RootState } from '../Types';
import {
  appSetLoadedAction,
  APP_DID_LOAD_ACTION,
} from '../reducers/App';

/**
 * Define a redux middleware function.
 * https://redux.js.org/advanced/middleware
 */
const middleware = (api: MiddlewareAPI, state: RootState) =>
(next: Dispatch<ActionType<any>>) =>
async (action: ActionType<any>) => {
  // Switch action type value to handle side effects.
  // Each case statement MUST return.
  // The Switch statement MUST have a default block that:
  // 1. calls the next: Dispatch<ActionType<any>> argument.
  // 2. returns.
  switch (action.type) {
    case APP_DID_LOAD_ACTION:

      // **OPTIONAL**
      // Call the next argument with the action argument.
      // Calling the next argument with the action argument ensures that the
      // action received continues to the reducer.
      next(action);

      // **OPTIONAL**
      // Handle asynchronous side effects.
      await new Promise(resolve => {
        setTimeout(() => resolve(appSetLoadedAction(true)(api.dispatch)), 3000);
      });

      // **REQUIRED**
      // return void. each case statement that interprets the action type
      // correctly MUST return.
      // received.
      return;

    // **REQUIRED**
    // Default case block MUST call next argument with action argument and return.
    default: return next(action);
  }
};

export default middleware as Middleware;
