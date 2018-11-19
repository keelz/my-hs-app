import { IActionType } from '../Types';
import { Dispatch } from 'redux';
import { composeCardClassNames } from '../../common/utils/card';
import {
  ICard,
  CardClassName
} from '../../common/models/Card';

/** STATE MODEL */
export interface CardsState {
  activeClassName: string;
  classNames: string[];
  data: ICard[];
}

/** STATE FACTORY */
export const defaultState = (): CardsState => ({
  activeClassName: CardClassName.DRUID,
  data: Array(0),
  classNames: Array(0),
});

/** ACTIONS */
export const CARDS_SET_ACTIVE_CLASSNAME = 'CARDS_SET_ACTIVE_CLASSNAME';
export const CARDS_SET_CARDS = 'CARDS_SET_CARDS';

/** ACTION CREATORS */
export const cardsSetCardsAction = (cards: ICard[]) =>
 (dispatch: Dispatch<IActionType<any>>) =>
 dispatch({
   type: CARDS_SET_CARDS,
   payload: { data: cards, classNames: composeCardClassNames(cards) },
 });

export const cardsSetActiveClassNameAction = (activeClassName: string) =>
 (dispatch: Dispatch<any>) =>
 dispatch({
   type: CARDS_SET_ACTIVE_CLASSNAME,
   payload: { activeClassName },
 });

/** REDUCER */
const reducer = (
  state: CardsState = defaultState(),
  action: IActionType<CardsState>): CardsState => {
  const { type } = action;
  switch (type) {
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
      classNames: !!action.payload
        ? action.payload.classNames
        : Array(0),
    };
    default: return state;
  }
};

export default reducer;
