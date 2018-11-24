import { IActionType } from '../Types';
import { Dispatch } from 'redux';
import {
  ICard,
  CardClassName
} from '../../common/models/Card';

/** STATE MODEL */
export interface CardsState {
  activeClassName: string;
  data: ICard[];
  filters: { [field: string]: string };
}

/** STATE FACTORY */
export const defaultState = (): CardsState => ({
  activeClassName: CardClassName.DRUID,
  data: Array(0),
  filters: {},
});

/** ACTIONS */
export const CARDS_DELETE_FILTERS = 'CARDS_DELETE_FILTER';
export const CARDS_SET_ACTIVE_CLASSNAME = 'CARDS_SET_ACTIVE_CLASSNAME';
export const CARDS_SET_CARDS = 'CARDS_SET_CARDS';
export const CARDS_SET_FILTER = 'CARDS_SET_FILTER';

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

/** REDUCER */
const reducer = (
  state: CardsState = defaultState(),
  action: IActionType<CardsState>): CardsState => {
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
    default: return state;
  }
};

export default reducer;
