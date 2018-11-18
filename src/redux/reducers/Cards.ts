import { ActionType } from '../Types';
import { Dispatch } from 'redux';

/** MODELS */
export interface CardsState {
  data: Card[];
}

// TODO: finish modeling card entity.
export interface Card {}

export enum CardLocale {
  EN = 'enUS',
}

export enum CardResolution {
  SMALL = 256,
  LARGE = 512,
}

export enum CardExt {
  PNG = 'png',
}

/** FACTORIES */
export const cardsStateFactory = () => ({
  data: Array(0),
});

/** ACTIONS */
export const CARDS_SET_CARDS = 'CARDS_SET_CARDS';

/** ACTION CREATORS */
export const cardsSetCardsAction = (cards: Card[]) =>
 (dispatch: Dispatch<ActionType<CardsState>>) =>
 dispatch({
   type: CARDS_SET_CARDS,
   payload: { data: cards },
 });

/** REDUCER */
const reducer = (
  state: CardsState = cardsStateFactory(),
  action: ActionType<CardsState>): CardsState => {
  const { type } = action;
  switch (type) {
    case CARDS_SET_CARDS: return {
      ...state,
      data: !!action.payload ? action.payload.data : Array(0),
    };
    default: return state;
  }
};

export default reducer;
