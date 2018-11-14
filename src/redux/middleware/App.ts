import { MiddlewareAPI, Dispatch, Middleware } from 'redux';
import { ActionType, RootState } from '../Types';

const mw = (api: MiddlewareAPI, state: RootState) =>
(next: Dispatch<ActionType<any>>) =>
(action: ActionType<any>) => {
  debugger;
  const { type } = action;
  switch (type) {
    default: return next(action);
  }
};

export default mw as Middleware;
