import { ActionType } from '../Types';
import { Dispatch } from 'redux';
import { composeCardClassNames } from '../../common/utils/card';

/** MODELS */
export interface CardsState {
  activeClassName?: string;
  classNames: string[];
  data: Card[];
}

// TODO: finish modeling card entity.
export interface Card {
  cardClass?: CardClassName;
  id: string;
  name: string;
}

export enum CardClassName {
  DEATHKNIGHT = 'DEATHKNIGHT',
  DREAM = 'DREAM',
  DRUID = 'DRUID',
  HUNTER = 'HUNTER',
  MAGE = 'MAGE',
  NEUTRAL = 'NEUTRAL',
  PALADIN = 'PALADIN',
  PRIEST = 'PRIEST',
  ROGUE = 'ROGUE',
  SHAMAN = 'SHAMAN',
  WARLOCK = 'WARLOCK',
  WARRIOR = 'WARRIOR',
  WHIZBANG = 'WHIZBANG',
}

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
export const cardsStateFactory = (): CardsState => ({
  activeClassName: undefined,
  data: Array(0),
  classNames: Array(0),
});

/** ACTIONS */
export const CARDS_SET_ACTIVE_CLASSNAME = 'CARDS_SET_ACTIVE_CLASSNAME';
export const CARDS_SET_CARDS = 'CARDS_SET_CARDS';

/** ACTION CREATORS */
export const cardsSetCardsAction = (cards: Card[]) =>
 (dispatch: Dispatch<ActionType<CardsState>>) =>
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
  state: CardsState = cardsStateFactory(),
  action: ActionType<CardsState>): CardsState => {
  const { type } = action;
  switch (type) {
    case CARDS_SET_ACTIVE_CLASSNAME: return {
      ...state,
      activeClassName: !!action.payload ? action.payload.activeClassName : undefined,
    };
    case CARDS_SET_CARDS: return {
      ...state,
      data: !!action.payload ? action.payload.data : Array(0),
      classNames: !!action.payload ? action.payload.classNames : Array(0),
    };
    default: return state;
  }
};

export default reducer;
