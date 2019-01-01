import { Dispatch } from 'redux';
import APP from '../constants/app';
import { selectCardsWithFilters } from '../../redux/selectors/Collection';
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

export interface ICollectionService {
  setActiveClassname: MiddlewareOperation;
  setFilter: MiddlewareOperation;
  setPagination: MiddlewareOperation;
  resetPagination: SafeMiddlewareOperation;
}

const service: ICollectionService = {
  /**
   * UNSAFE MIDDLEWARE OPERATION
   * handle set active classname side effects.
   * 1. if the class name doesn't change, do nothing.
   * 2. if the class name changes, reset pagination.
   */
  setActiveClassname: (api: AppMiddlewareApi) =>
    (next: Dispatch<IActionType<any>>) =>
    (action: IActionType<ICollectionState>) => {
      const { activeClassName } = action.payload!;
      const currentClassname = api.getState().Collection.activeClassName;
      // *** ANTI=PATTERN, UNSAFE MIDDLEWARE OPERATION, MUTATE ACTION ***
      // if the new value matches the perviously perstisted value then the
      // desired effect is to do nothing. We achieve the desired effect by
      // returning without calling the next method.
      if (activeClassName === currentClassname) return;
      // otherwise call next and reset pagination
      next(action);
      service.resetPagination(api)(action);
    },

  /**
   * UNSAFE MIDDLEWARE OPERATION
   * handle set card filters action side effects.
   * 1. remove the cost filter if new value already exists
   * 2. reset pagination
   * @param api {AppMiddlewareApi}
   */
  setFilter: (api: AppMiddlewareApi) =>
    (next: Dispatch<IActionType<any>>) =>
    (action: IActionType<any>) => {
      const state = api.getState();
      const currentFilters = state.Collection.filters;
      const newFilters = action.payload.filters;
      // remove the cost filter if it already exists
      if (!!newFilters[HSJSON.RESPONSE_PARAMS.COST]
        && !!currentFilters[HSJSON.RESPONSE_PARAMS.COST]
        && newFilters[HSJSON.RESPONSE_PARAMS.COST]
        === currentFilters[HSJSON.RESPONSE_PARAMS.COST]) {
        // dispatch delete filter action
        collectionDeleteFilterAction(HSJSON.RESPONSE_PARAMS.COST)(api.dispatch);
        // reset pagination
        service.resetPagination(api)(action);
        // *** ANTI-PATTERN, UNSAFE MIDDLEWARE OPERATION, MUTATE ACTION ***
        // The desired effect when the set filter action is called with the cost filter,
        // and the value of the cost filter has been previously persisted, is to remove
        // the cost filter. We achieve the desired effect by calling the delete filter
        // action and returning without calling the next method.
        return;
      }
      // otherwise call next and reset pagination
      next(action);
      service.resetPagination(api)(action);
    },

  /**
   * SAFE MIDDLEWARE OPERATION
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

  /**
   * UNSAFE MIDDLEWARE OPERATION
   * handle set pagination side effects.
   * 1. prevent paging backward when appropriate.
   * 2. prevent paging forward when appropriate.
   */
  setPagination: (api: AppMiddlewareApi) =>
    (next: Dispatch<IActionType<any>>) =>
    (action: IActionType<ICollectionState>) => {
      const { payload } = action;
      // pass through if payload is undefined.
      if (undefined === payload) return next(action);
      // deconstruct pagination properties from payload.
      const { currentPage, pages } = payload.pagination;
      // *** ANTI-PATTERN, UNSAFE MIDDLEWARE OPERATION, MUTATE ACTION ***
      // prevent paging backward.
      if (currentPage < 0) return; // prevent pass through
      // *** ANTI-PATTERN, UNSAFE MIDDLEWARE OPERATION, MUTATE ACTION ***
      // prevent paging forward.
      if (currentPage >= pages) return; // prevent pass through
      // pass through.
      return next(action);
    },
};

export default service;
