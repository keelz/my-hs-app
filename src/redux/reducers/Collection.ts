import { IActionType, ModalState } from '../Types';
import { Dispatch } from 'redux';
import { IPagination } from '../../common/models/App.model';
import {
  ICard,
  CardClassName
} from '../../common/models/Cards.model';

/** STATE MODEL */
export interface ICollectionState {
  activeCard?: ICard;
  activeClassName: string;
  filters: { [field: string]: string };
  modal: ModalState;
  pagination: IPagination;
}

/** STATE FACTORY */
export const defaultState = (): ICollectionState => ({
  activeCard: undefined,
  activeClassName: CardClassName.DRUID,
  filters: {},
  modal: ModalState.CLOSED,
  pagination: {
    currentPage: 0,
    itemsPerPage: 0,
    pages: 0,
    total: 0,
  },
});

/** ACTIONS */
export const COLLECTION_DELETE_FILTERS = 'COLLECTION_DELETE_FILTERS';
export const COLLECTION_SET_ACTIVE_CARD = 'COLLECTION_SET_ACTIVE_CARD';
export const COLLECTION_SET_ACTIVE_CLASSNAME = 'COLLECTION_SET_ACTIVE_CLASSNAME';
export const COLLECTION_SET_FILTER = 'COLLECTION_SET_FILTER';
export const COLLECTION_SET_MODAL = 'COLLECTION_SET_MODAL';
export const COLLECTION_SET_PAGINATION = 'COLLECTION_SET_PAGINATION';

/** ACTION CREATORS */
export const collectionDeleteFilterAction = (key: string) =>
  (dispatch: Dispatch<any>) =>
  dispatch({
    type: COLLECTION_DELETE_FILTERS,
    payload: { filters: { [key]: undefined } },
  });

export const collectionSetActiveCardAction = (activeCard: ICard) =>
  (dispatch: Dispatch<IActionType<any>>) =>
  dispatch({
    type: COLLECTION_SET_ACTIVE_CARD,
    payload: { activeCard },
  });

export const collectionSetActiveClassNameAction = (activeClassName: string) =>
 (dispatch: Dispatch<any>) =>
 dispatch({
   type: COLLECTION_SET_ACTIVE_CLASSNAME,
   payload: { activeClassName },
 });

export const collectionSetFilterAction = (key: string, value: string) =>
 (dispatch: Dispatch<any>) =>
 dispatch({
   type: COLLECTION_SET_FILTER,
   payload: { filters: { [key]: value } },
 });

export const collectionSetModalAction = (modal: ModalState) =>
 (dispatch: Dispatch<IActionType<any>>) =>
 dispatch({
   type: COLLECTION_SET_MODAL,
   payload: { modal },
 });

export const collectionSetPaginationAction = (pagination: IPagination) =>
 (dispatch: Dispatch<any>) =>
 dispatch({
   type: COLLECTION_SET_PAGINATION,
   payload: { pagination },
 });

/** REDUCER */
const reducer = (
  state: ICollectionState = defaultState(),
  action: IActionType<ICollectionState>): ICollectionState => {
  const { type } = action;
  switch (type) {
    case COLLECTION_DELETE_FILTERS:
      const deleteFilters = { ...state.filters };
      !!action.payload && Object
        .keys(action.payload.filters)
        .forEach(key => delete deleteFilters[key]);
      return {
        ...state,
        filters: { ...deleteFilters },
      };
    case COLLECTION_SET_ACTIVE_CARD: return {
      ...state,
      activeCard: action.payload!.activeCard,
    };
    case COLLECTION_SET_ACTIVE_CLASSNAME: return {
      ...state,
      activeClassName: !!action.payload
        ? action.payload.activeClassName
        : CardClassName.DRUID,
    };
    case COLLECTION_SET_FILTER:
      const filters = action.payload
        ? { ...state.filters, ...action.payload.filters }
        : { ...state.filters };
      return { ...state, filters };
    case COLLECTION_SET_MODAL: return {
      ...state,
      modal: action.payload!.modal,
    };
    case COLLECTION_SET_PAGINATION: return {
      ...state,
      pagination: !!action.payload
        ? action.payload.pagination
        : state.pagination,
    };
    default: return state;
  }
};

export default reducer;
