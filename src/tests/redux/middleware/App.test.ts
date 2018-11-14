import middleware from '../../../redux/middleware/App';
import {
  APP_DID_LOAD_ACTION
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
  it('calls next correctly', () => {
    const { action, next, store } = compose();
    const actionType = action(APP_DID_LOAD_ACTION);
    middleware(store)(next)(actionType);
    expect(next).toHaveBeenCalledWith({
      type: APP_DID_LOAD_ACTION,
    });
  });
});
