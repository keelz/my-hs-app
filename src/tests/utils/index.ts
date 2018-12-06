import { Middleware } from 'redux';
import { IActionType } from '../../redux/Types';

export interface IMockStore {
  action: (type: string) => any;
  invoke: (action: IActionType<any>) => any;
  next: () => any;
  store: {
    dispatch: () => any;
    getState: () => any;
    subscribe: () => any;
  };
}

let mockState = {};

export const composeMockStore = (withMiddleware: Middleware) => {
  const middleware = withMiddleware;

  const store = {
    dispatch: jest.fn(),
    getState: jest.fn(() => mockState),
    subscribe: jest.fn(),
  };

  const setState = (state: Object) => mockState = { ...state };

  const next = jest.fn();

  const action = (type: string) =>
    (payload?: any) => ({
      type,
      payload,
    });

  const invoke = (action: IActionType<any>) =>
    middleware(store)(next)(action);

  return { action, invoke, next, setState, store };
};
