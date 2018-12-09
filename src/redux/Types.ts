import { MiddlewareAPI, Dispatch } from 'redux';
import { IBrowser } from 'redux-responsive';
import { AppState } from './reducers/App';
import { ICardsState } from './reducers/Cards';
import { ICollectionState } from './reducers/Collection';

export interface IActionType<T> {
  type: string;
  payload?: T;
}

export interface IRootState {
  App: AppState;
  Browser: IBrowser;
  Cards: ICardsState;
  Collection: ICollectionState;
}

export type AppMiddlewareApi = MiddlewareAPI<Dispatch<IActionType<any>>, IRootState>;

export type AsyncMiddlewareOperation = (api: AppMiddlewareApi) =>
  (next: Dispatch<IActionType<any>>) =>
  (action: IActionType<any>) => Promise<any>;

export type MiddlewareOperation = (api: AppMiddlewareApi) =>
  (next: Dispatch<IActionType<any>>) =>
  (action: IActionType<any>) => void;

export type SafeMiddlewareOperation = (api: AppMiddlewareApi) =>
  (action: IActionType<any>) => void;

export enum ModalState {
  CLOSED, OPEN,
}
