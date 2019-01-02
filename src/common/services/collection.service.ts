import { Dispatch } from 'redux';
import APP from '../constants/app';
import { CardSet } from '../models/Cards.model';
import { selectCardsWithFilters } from '../../redux/selectors/Collection';
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

const { FILTERS } = APP.COLLECTION;

export interface ICollectionService {
  handleSetCardSetFilter: MiddlewareOperation;
  handleSetCostFilter: MiddlewareOperation;
  setActiveClassname: MiddlewareOperation;
  setFilter: MiddlewareOperation;
  setPagination: MiddlewareOperation;
  resetPagination: SafeMiddlewareOperation;
}

const service: ICollectionService = {
  /**
   * UNSAFE MIDDLEWARE OPERATION
   * handle set cost filter side effects.
   * 1. if the new filter value already exists
   *    1.a. remove the filter
   *    1.b. reset pagination
   *    1.c. return
   * 2. call next and reset pagination
   */
  handleSetCostFilter: (api: AppMiddlewareApi) =>
    (next: Dispatch<IActionType<any>>) =>
    (action: IActionType<ICollectionState>) => {
      const currentFilters = api.getState().Collection.filters;
      const newFilters = action.payload!.filters;
      // 1. if the new filter value already exists
      if (!!currentFilters[FILTERS.COST]
        && newFilters[FILTERS.COST] === currentFilters[FILTERS.COST]) {
        // 1.a. remove the filter
        collectionDeleteFilterAction(FILTERS.COST)(api.dispatch);
        // 1.b. reset pagination
        service.resetPagination(api)(action);
        // 1.c. return
        return;
      }
      // 2. call next and reset pagination
      next(action);
      service.resetPagination(api)(action);
    },

  /**
   * UNSAFE MIDDLEWARE OPERATION
   * handle set card set filter
   * 1. if filter value is equal to NONE then delete all card set filters and return
   * 2. mutate payload
   *    2.a. if set filter already exists then mutate based on add porperty
   *    2.b. otherwise mutate to a single element string array
   * 3. call next
   */
  handleSetCardSetFilter: (api: AppMiddlewareApi) =>
    (next: Dispatch<IActionType<any>>) =>
    (action: IActionType<any>) => {
      const currentFilters = api.getState().Collection.filters;
      const currentSetFilters = currentFilters[FILTERS.SET] as string[];
      const newFilters = action.payload.filters;
      const { add } = action.payload;
      const setValue = newFilters[FILTERS.SET];
      // 1. if filter value is equal to NONE then delete all card set filters and return
      if (setValue === CardSet.NONE) {
        collectionDeleteFilterAction(FILTERS.SET)(api.dispatch);
        return;
      }
      // 2. mutate payload
      // 2.a. if set filter already exists then mutate based on add porperty value and current state
      if (!!currentSetFilters) {
        const nextSetFilters = add
          // add the set value to existing filters
          ? currentSetFilters.indexOf(setValue) >= 0
            ? currentSetFilters
            : [...currentSetFilters, setValue]
          // otherwise, either remove the set value if it already exists,
          // or return a single element array containing the set value
          : currentSetFilters.indexOf(setValue) >= 0
            ? [
              ...currentSetFilters.slice(
                0,
                currentSetFilters.indexOf(setValue) - 1
              ),
              ...currentSetFilters.slice(
                currentSetFilters.indexOf(setValue) + 1,
                currentSetFilters.length
              ),
            ] : [setValue];
        action.payload.filters[FILTERS.SET] = nextSetFilters;
      } else {
        // 2.b otherwise mutate to a single element string array
        action.payload.filters[FILTERS.SET] = [setValue];
      }
      // 3. call next
      next(action);
    },

  /**
   * UNSAFE MIDDLEWARE OPERATION
   * handle set active classname side effects.
   * 1. if the class name doesn't change then do nothing
   * 2. otherwise, call next and reset pagination
   */
  setActiveClassname: (api: AppMiddlewareApi) =>
    (next: Dispatch<IActionType<any>>) =>
    (action: IActionType<ICollectionState>) => {
      const { activeClassName } = action.payload!;
      const currentClassname = api.getState().Collection.activeClassName;
      // 1. if the class name doesn't change then do nothing
      if (activeClassName === currentClassname) return;
      // 2. otherwise, call next and reset pagination
      next(action);
      service.resetPagination(api)(action);
    },

  /**
   * UNSAFE MIDDLEWARE OPERATION
   * handle set card filters action side effects.
   * 1. handle set cost filter
   * 2. handle set card set filter
   * 3. call next and reset pagination
   * @param api {AppMiddlewareApi}
   */
  setFilter: (api: AppMiddlewareApi) =>
    (next: Dispatch<IActionType<any>>) =>
    (action: IActionType<any>) => {
      const nextFilter = Object.keys(action.payload.filters).shift();
      switch (nextFilter) {
        // 1. handle set cost filter
        case FILTERS.COST:
          service.handleSetCostFilter(api)(next)(action);
          return;
        // 2. handle set card set filter
        case FILTERS.SET:
          service.handleSetCardSetFilter(api)(next)(action);
          return;
      }
      // 3. call next and reset pagination
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
      // prevent paging backward.
      if (currentPage < 0) return; // prevent pass through
      // prevent paging forward.
      if (currentPage >= pages) return; // prevent pass through
      // pass through.
      return next(action);
    },
};

export default service;
