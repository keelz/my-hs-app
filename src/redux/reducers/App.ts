import { IActionType } from '../Types';
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
export const APP_DID_LOAD = 'APP_DID_LOAD';
export const APP_SET_LOADED = 'APP_SET_LOADED';

/** ACTION CREATORS */
export const appDidLoadAction = () =>
  (dispatch: Dispatch) =>
  dispatch({ type: APP_DID_LOAD });

export const appSetLoadedAction = (loaded: boolean) =>
  (dispatch: Dispatch) =>
  dispatch({
    type: APP_SET_LOADED,
    payload: { loaded },
  });

/** REDUCER */
export default (state: AppState = appStateFactory(), action: IActionType<any>): AppState => {
  const { type } = action;
  switch (type) {
    case APP_SET_LOADED: return {
      loaded: action.payload.loaded,
    };
    default: return state;
  }
};
