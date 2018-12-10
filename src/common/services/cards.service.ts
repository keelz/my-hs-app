import { Dispatch } from 'redux';
import APP from '../constants/app';
import { selectCardsWithFilters } from '../../redux/selectors/cards';
import HSJSON from '../constants/hsJson';
import {
  ICollectionState,
  collectionDeleteFilterAction,
  collectionSetPaginationAction,
} from '../../redux/reducers/Collection';
import {
  IActionType,
  MiddlewareOperation,
  AppMiddlewareApi,
  SafeMiddlewareOperation,
} from '../../redux/Types';

export interface ICardsService {
  handleSetActiveClassname: MiddlewareOperation;
  handleSetFilter: MiddlewareOperation;
  handleSetPagination: MiddlewareOperation;
  resetPagination: SafeMiddlewareOperation;
}

const service: ICardsService = {
  /**
   * handle set active classname side effects.
   * - if the class name doesn't change, do nothing.
   * - if the class name changes, reset pagination.
   */
  handleSetActiveClassname: (api: AppMiddlewareApi) =>
    (next: Dispatch<IActionType<any>>) =>
    (action: IActionType<ICollectionState>) => {
      const { activeClassName } = action.payload!;
      const currentClassname = api.getState().Collection.activeClassName;
      if (activeClassName === currentClassname) return;
      next(action);
      service.resetPagination(api)(action);
    },

  /**
   * handle set pagination side effects.
   * - prevent paging backward when appropriate.
   * - prevent paging forward when appropriate.
   * EXAMPLE OF: prevent action passthrough.
   */
  handleSetPagination: (api: AppMiddlewareApi) =>
    (next: Dispatch<IActionType<any>>) =>
    (action: IActionType<ICollectionState>) => {
      const { payload } = action;
      // pass through if payload is undefined.
      if (undefined === payload) return next(action);
      // deconstruct pagination properties from payload.
      const { currentPage, pages } = payload.pagination;
      // prevent paging backward.
      if (currentPage < 0) return; // prevent pass through
      // prevent paging forward.
      if (currentPage >= pages) return; // prevent pass through
      // pass through.
      return next(action);
    },

  /**
   * handle set card filters action side effects.
   * remove the cost filter if new value is equal to persisted value.
   * @param api {AppMiddlewareApi}
   */
  handleSetFilter: (api: AppMiddlewareApi) =>
    (next: Dispatch<IActionType<any>>) =>
    (action: IActionType<any>) => {
      const state = api.getState();
      const currentFilters = state.Collection.filters;
      const newFilters = action.payload.filters;
      if (!!newFilters[HSJSON.RESPONSE_PARAMS.COST]
        && !!currentFilters[HSJSON.RESPONSE_PARAMS.COST]
        && newFilters[HSJSON.RESPONSE_PARAMS.COST]
        === currentFilters[HSJSON.RESPONSE_PARAMS.COST]) {
        collectionDeleteFilterAction(HSJSON.RESPONSE_PARAMS.COST)(api.dispatch);
        service.resetPagination(api)(action);
        return;
      }
      next(action);
      service.resetPagination(api)(action);
      return;
    },

  /**
   * safe middleware operation:
   * reset collection pagination to initial state for current collection.
   * @param api {AppMiddlewareApi}
   */
  resetPagination: (api: AppMiddlewareApi) =>
    (_: IActionType<any>) => {
      const state = api.getState();
      const collection = selectCardsWithFilters(state);
      const total = collection.length;
      const itemsPerPage = APP.COLLECTION.CARDS_PER_PAGE;
      const pages = Math.ceil(total / itemsPerPage);
      const pagination = {
        itemsPerPage,
        pages,
        total,
        currentPage: 0,
      };
      collectionSetPaginationAction(pagination)(api.dispatch);
    },
};

export default service;
