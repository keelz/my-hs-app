import { ActionType } from '../Types';
import { Dispatch } from 'redux';

/** MODELS */
export type AppState = {
  loaded: boolean;
};

/** ACTIONS */
export const APP_DID_LOAD_ACTION = 'APP_DID_LOAD_ACTION';

/** FACTORIES */
export const appStateFactory = () => ({
  loaded: false,
});

/** ACTION CREATORS */
export const appDidLoadAction = () =>
  (dispatch: Dispatch) =>
  dispatch({ type: APP_DID_LOAD_ACTION });

/** REDUCER */
export default (state: AppState = appStateFactory(), action: ActionType<any>): AppState => {
  const { type } = action;
  switch (type) {
    default: return state;
  }
};
