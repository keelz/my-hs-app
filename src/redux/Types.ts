import { IBrowser } from 'redux-responsive';
import { AppState } from './reducers/App';
import { CardsState } from './reducers/Cards';

export type IActionType<T> = {
  type: string;
  payload?: T;
};

export interface IRootState {
  App: AppState;
  Browser: IBrowser;
  Cards: CardsState;
}
