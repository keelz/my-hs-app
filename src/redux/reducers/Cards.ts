import { IActionType } from '../Types';
import { Dispatch } from 'redux';
import { IPagination } from '../../common/models/app.model';
import {
  ICard,
  CardClassName
} from '../../common/models/cards.model';

/** STATE MODEL */
export interface ICardsState {
  activeClassName: string;
  data: ICard[];
  filters: { [field: string]: string };
  pagination: IPagination;
}

/** STATE FACTORY */
export const defaultState = (): ICardsState => ({
  activeClassName: CardClassName.DRUID,
  data: Array(0),
  filters: {},
  pagination: {
    currentPage: 0,
    itemsPerPage: 0,
    pages: 0,
    total: 0,
  },
});

/** ACTIONS */
export const CARDS_DELETE_FILTERS = 'CARDS_DELETE_FILTER';
export const CARDS_SET_ACTIVE_CLASSNAME = 'CARDS_SET_ACTIVE_CLASSNAME';
export const CARDS_SET_CARDS = 'CARDS_SET_CARDS';
export const CARDS_SET_FILTER = 'CARDS_SET_FILTER';
export const CARDS_SET_PAGINATION = 'CARDS_SET_PAGINATION';

/** ACTION CREATORS */
export const cardsDeleteFilterAction = (key: string) =>
  (dispatch: Dispatch<any>) =>
  dispatch({
    type: CARDS_DELETE_FILTERS,
    payload: { filters: { [key]: undefined } },
  });

export const cardsSetCardsAction = (data: ICard[]) =>
 (dispatch: Dispatch<IActionType<any>>) =>
 dispatch({
   type: CARDS_SET_CARDS,
   payload: { data },
 });

export const cardsSetActiveClassNameAction = (activeClassName: string) =>
 (dispatch: Dispatch<any>) =>
 dispatch({
   type: CARDS_SET_ACTIVE_CLASSNAME,
   payload: { activeClassName },
 });

export const cardsSetFilterAction = (key: string, value: string) =>
 (dispatch: Dispatch<any>) =>
 dispatch({
   type: CARDS_SET_FILTER,
   payload: { filters: { [key]: value } },
 });

export const cardsSetPaginationAction = (pagination: IPagination) =>
 (dispatch: Dispatch<any>) =>
 dispatch({
   type: CARDS_SET_PAGINATION,
   payload: { pagination },
 });

/** REDUCER */
const reducer = (
  state: ICardsState = defaultState(),
  action: IActionType<ICardsState>): ICardsState => {
  const { type } = action;
  switch (type) {
    case CARDS_DELETE_FILTERS:
      const deleteFilters = { ...state.filters };
      !!action.payload && Object
        .keys(action.payload.filters)
        .forEach(key => delete deleteFilters[key]);
      return {
        ...state,
        filters: { ...deleteFilters },
      };
    case CARDS_SET_ACTIVE_CLASSNAME: return {
      ...state,
      activeClassName: !!action.payload
        ? action.payload.activeClassName
        : CardClassName.DRUID,
    };
    case CARDS_SET_CARDS: return {
      ...state,
      data: !!action.payload
        ? action.payload.data
        : Array(0),
    };
    case CARDS_SET_FILTER:
      const filters = action.payload
        ? { ...state.filters, ...action.payload.filters }
        : { ...state.filters };
      return { ...state, filters };
    case CARDS_SET_PAGINATION: return {
      ...state,
      pagination: !!action.payload
        ? action.payload.pagination
        : state.pagination,
    };
    default: return state;
  }
};

export default reducer;
