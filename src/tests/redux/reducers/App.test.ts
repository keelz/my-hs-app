import reducer, {
  appDidLoadAction,
  appStateFactory,
  APP_DID_LOAD_ACTION,
  APP_SET_LOADED_ACTION,
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
  it('composes default state correctly', () => {
    const state = appStateFactory();
    expect(state).toMatchSnapshot();
  });

  it(`dispatchs ${APP_DID_LOAD_ACTION} correctly`, () => {
    const { store } = compose();
    appDidLoadAction()(store.dispatch);
    expect(store.dispatch).toHaveBeenCalledWith({
      type: APP_DID_LOAD_ACTION,
    });
  });

  it(`handles ${APP_DID_LOAD_ACTION} correctly`, () => {
    const state = appStateFactory();
    const newState = reducer(state, { type: APP_DID_LOAD_ACTION });
    expect(newState).toEqual(state);
  });

  it(`handles ${APP_SET_LOADED_ACTION} correctly`, () => {
    const state = appStateFactory();
    const newState = reducer(state, {
      type: APP_SET_LOADED_ACTION,
      payload: { loaded: true },
    });
    expect(newState).toEqual({
      ...state,
      loaded: true,
    });
  });
});
