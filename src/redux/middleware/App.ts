import { MiddlewareAPI, Dispatch, Middleware } from 'redux';
import hsJsonApi from '../../common/services/hsJsonApi';
import HSJSON from '../../common/constants/hsJson';
import { IActionType, IRootState } from '../Types';
import { cardsSetCardsAction, CARDS_SET_FILTER, cardsDeleteFilterAction } from '../reducers/Cards';
import {
  appSetLoadedAction,
  APP_DID_LOAD,
} from '../reducers/App';

/**
 * Define a redux middleware function.
 * https://redux.js.org/advanced/middleware
 */
const middleware = (api: MiddlewareAPI, state: IRootState) =>
(next: Dispatch<IActionType<any>>) =>
async (action: IActionType<any>) => {
  // Switch action type value to handle side effects.
  // Each case statement MUST return.
  // The Switch statement MUST have a default block that:
  // 1. calls the next: Dispatch<ActionType<any>> argument.
  // 2. returns.
  switch (action.type) {
    case APP_DID_LOAD:

      // **OPTIONAL**
      // Call the next argument with the action argument.
      // Calling the next argument with the action argument ensures that the
      // action received continues to the reducer.
      next(action);

      // **OPTIONAL**
      // complete asynchronous tasks synchronously.
      const response = await hsJsonApi.read(HSJSON.PATH.READ.LATEST);

      // **OPTIONAL**
      // dispatch side effects.
      cardsSetCardsAction(response.data)(api.dispatch);
      appSetLoadedAction(true)(api.dispatch);

      // **REQUIRED**
      // return void. each case statement that interprets the action type
      // correctly MUST return.
      // received.
      return;
    case CARDS_SET_FILTER:
      // capture state scope within anonymous function.
      (() => {
        const state = api.getState();
        const currentFilters = state.Cards.filters;
        const newFilters = action.payload.filters;
        if (!!newFilters[HSJSON.RESPONSE_PARAMS.COST]
          && !!currentFilters[HSJSON.RESPONSE_PARAMS.COST]
          && newFilters[HSJSON.RESPONSE_PARAMS.COST]
          === currentFilters[HSJSON.RESPONSE_PARAMS.COST]) {
          cardsDeleteFilterAction(HSJSON.RESPONSE_PARAMS.COST)(api.dispatch);
          return;
        }
        return next(action);
      })();
      return;
      // const currentFilters = state.Cards.filters;
      // const newFilters = action.payload.filters;
      // console.log(currentFilters, newFilters);

    // **REQUIRED**
    // Default case block MUST call next argument with action argument and return.
    default: return next(action);
  }
};

export default middleware as Middleware;
