import { ActionType } from '../Types';
import { Dispatch } from 'redux';

/** MODELS */
export type AppState = {
  loaded: boolean;
};

/** FACTORIES */
export const appStateFactory = () => ({
  loaded: false,
});

/** ACTIONS */
export const APP_DID_LOAD_ACTION = 'APP_DID_LOAD_ACTION';
export const APP_SET_LOADED_ACTION = 'APP_SET_LOADED_ACTION';

/** ACTION CREATORS */
export const appDidLoadAction = () =>
  (dispatch: Dispatch) =>
  dispatch({ type: APP_DID_LOAD_ACTION });

export const appSetLoadedAction = (loaded: boolean) =>
  (dispatch: Dispatch) =>
  dispatch({ type: APP_SET_LOADED_ACTION, payload: { loaded } });

/** REDUCER */
export default (state: AppState = appStateFactory(), action: ActionType<any>): AppState => {
  const { type } = action;
  switch (type) {
    case APP_SET_LOADED_ACTION: return {
      loaded: action.payload.loaded,
    };
    default: return state;
  }
};
