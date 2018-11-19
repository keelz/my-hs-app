import { IBrowser } from 'redux-responsive';
import { AppState } from './reducers/App';
import { CardsState } from './reducers/Cards';

export type ActionType<T> = {
  type: string;
  payload?: T;
};

export interface RootState {
  App: AppState;
  Browser: IBrowser;
  Cards: CardsState;
}
