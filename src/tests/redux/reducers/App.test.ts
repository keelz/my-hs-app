import reducer, {
  appDidLoadAction,
  appSetLoadedAction,
  appStateFactory,
  APP_DID_LOAD,
  APP_SET_LOADED,
} from '../../../redux/reducers/App';

const compose = () => {
  const store = {
    getState: jest.fn(),
    dispatch: jest.fn(),
    subscribe: jest.fn(),
  };

  return { store };
};

describe('App reducer', () => {
  describe('factories', () => {
    it('composes default state correctly', () => {
      const state = appStateFactory();
      expect(state).toMatchSnapshot();
    });
  });

  describe('action creators', () => {
    it(`dispatchs ${APP_DID_LOAD} correctly`, () => {
      const { store } = compose();
      appDidLoadAction()(store.dispatch);
      expect(store.dispatch).toHaveBeenCalledWith({
        type: APP_DID_LOAD,
      });
    });

    it(`dispatches ${APP_SET_LOADED} correctly`, () => {
      const { store } = compose();
      appSetLoadedAction(true)(store.dispatch);
      expect(store.dispatch).toHaveBeenCalledWith({
        type: APP_SET_LOADED,
        payload: { loaded: true },
      });
    });
  });

  describe('reducer', () => {
    it(`handles ${APP_DID_LOAD} correctly`, () => {
      const state = appStateFactory();
      const newState = reducer(state, { type: APP_DID_LOAD });
      expect(newState).toEqual(state);
    });

    it(`handles ${APP_SET_LOADED} correctly`, () => {
      const state = appStateFactory();
      const newState = reducer(state, {
        type: APP_SET_LOADED,
        payload: { loaded: true },
      });
      expect(newState).toEqual({
        ...state,
        loaded: true,
      });
    });
  });
});
