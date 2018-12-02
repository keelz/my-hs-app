import { MiddlewareAPI, Dispatch } from 'redux';
import { IActionType } from '../../redux/Types';
import { ICardsState, cardsDeleteFilterAction } from '../../redux/reducers/Cards';
import { MiddlewareOperation } from '../models/app.model';
import HSJSON from '../constants/hsJson';

export interface ICardsService {
  handleSetPagination: MiddlewareOperation;
  handleSetFilter: MiddlewareOperation;
}

const service: ICardsService = {
  handleSetPagination: (api: MiddlewareAPI) =>
    (next: Dispatch<IActionType<any>>) =>
    (action: IActionType<ICardsState>) => {
      const { payload } = action;
      // pass through if payload is undefined.
      if (undefined === payload) return next(action);
      // deconstruct pagination properties from payload.
      const { currentPage, pages } = payload.pagination;
      // prevent paging backward.
      if (currentPage < 0) return;
      // prevent paging forward.
      if (currentPage >= pages) return;
      // pass through.
      return next(action);
    },

  /**
   * handle set card filters action side effects.
   * remove the cost filter if new value is equal to persisted value.
   * @param api {AppMiddlewareApi}
   */
  handleSetFilter: (api: MiddlewareAPI) =>
    (next: Dispatch<IActionType<any>>) =>
    (action: IActionType<any>) => {
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
      next(action);
      return;
    },
};

export default service;
