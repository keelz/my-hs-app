import { Dispatch } from 'react';
import { IActionType, ModalState } from '../Types';

/** MODEL */
export interface ICollectionState {
  modal: ModalState;
}

/** STATE FACTORY */
export const collectionStateFactory = (): ICollectionState => ({
  modal: ModalState.CLOSED,
});

/** ACTIONs */
export const COLLECTION_SET_MODAL = 'COLLECTION_SET_MODAL';

/** ACTION CREATORS */
export const setCollectionModalAction = (modal: ModalState) =>
  (dispatch: Dispatch<IActionType<ICollectionState>>) =>
  dispatch({
    type: COLLECTION_SET_MODAL,
    payload: { modal },
  });

/** REDUCER */
export const reducer = (
  state: ICollectionState = collectionStateFactory(),
  action: IActionType<ICollectionState>
): ICollectionState => {
  const { type } = action;
  switch (type) {
    case COLLECTION_SET_MODAL: return {
      ...state,
      modal: action.payload!.modal,
    };
    default: return state;
  }
};

export default reducer;
