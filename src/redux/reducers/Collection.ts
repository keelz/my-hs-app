import { Dispatch } from 'react';
import { IActionType, ModalState } from '../Types';
import { ICard } from '../../common/models/cards.model';

/** MODEL */
export interface ICollectionState {
  activeCard?: ICard;
  modal: ModalState;
}

/** STATE FACTORY */
export const collectionStateFactory = (): ICollectionState => ({
  activeCard: undefined,
  modal: ModalState.CLOSED,
});

/** ACTIONs */
export const COLLECTION_SET_ACTIVE_CARD = 'COLLECTION_SET_ACTIVE_CARD';
export const COLLECTION_SET_MODAL = 'COLLECTION_SET_MODAL';

/** ACTION CREATORS */
export const setCollectionActiveCardAction = (activeCard: ICard) =>
  (dispatch: Dispatch<IActionType<any>>) =>
  dispatch({
    type: COLLECTION_SET_ACTIVE_CARD,
    payload: { activeCard },
  });

export const setCollectionModalAction = (modal: ModalState) =>
  (dispatch: Dispatch<IActionType<ICollectionState>>) =>
  dispatch({
    type: COLLECTION_SET_MODAL,
    payload: { modal },
  });

/** REDUCER */
export const reducer = (
  state: any = collectionStateFactory(),
  action: IActionType<ICollectionState>
): ICollectionState => {
  const { type } = action;
  switch (type) {
    case COLLECTION_SET_ACTIVE_CARD: return {
      ...state,
      activeCard: action.payload!.activeCard,
    };
    case COLLECTION_SET_MODAL: return {
      ...state,
      modal: action.payload!.modal,
    };
    default: return state;
  }
};

export default reducer;
