import middleware from '../../../redux/middleware/App';
import {
  APP_DID_LOAD_ACTION,
  APP_SET_LOADED_ACTION
} from '../../../redux/reducers/App';

const compose = () => {
  const store = {
    dispatch: jest.fn(),
    getState: jest.fn(),
    subscribe: jest.fn(),
  };

  const next = jest.fn();

  const action = (type: string, payload?: any) => ({
    type,
    payload,
  });

  return { action, next, store };
};

describe('App middleware', () => {
  it('handles unknown action correctly', () => {
    const { action, next, store } = compose();
    const actionType = action('UNKNOWN');
    middleware(store)(next)(actionType);
    expect(next).toHaveBeenCalledWith(actionType);
  });

  it(`handles ${APP_DID_LOAD_ACTION} correctly`, () => {
    const { action, next, store } = compose();
    const actionType = action(APP_DID_LOAD_ACTION);
    return middleware(store)(next)(actionType).then(() => {
      expect(next).toHaveBeenCalledWith(actionType);
      expect(store.dispatch).toHaveBeenCalledWith({
        type: APP_SET_LOADED_ACTION,
        payload: { loaded: true },
      });
    });
  });
});
