import { AppState } from './reducers/App';
import { IBrowser } from 'redux-responsive';

export type ActionType<T> = {
  type: string;
  payload?: T;
};

export interface RootState {
  App: AppState;
  Browser: IBrowser;
}
