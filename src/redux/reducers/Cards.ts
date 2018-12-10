import { Dispatch } from 'react';
import { IActionType } from '../Types';
import { ICard } from '../../common/models/Cards.model';

/** MODEL */
export interface ICardsState {
  data: ICard[];
}

/** STATE FACTORY */
export const defaultState = (): ICardsState => ({
  data: Array(0),
});

/** ACTIONS */
export const CARDS_SET_CARDS = 'CARDS_SET_CARDS';

/** ACTION CREATORS */
export const cardsSetCardsAction = (data: ICard[]) =>
  (dispatch: Dispatch<IActionType<any>>) => {
    dispatch({
      type: CARDS_SET_CARDS,
      payload: { data },
    });
  };

/** REDUCER */
export const reducer = (
  state: any = defaultState(),
  action: IActionType<ICardsState>
): ICardsState => {
  const { type } = action;
  switch (type) {
    case CARDS_SET_CARDS: return {
      ...state,
      data: action.payload!.data,
    };
    default: return state;
  }
};

export default reducer;
