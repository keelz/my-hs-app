import { MiddlewareAPI, Dispatch } from 'redux';
import { IBrowser } from 'redux-responsive';
import { AppState } from './reducers/App';
import { ICollectionState } from './reducers/Collection';
import { ICardsState } from './reducers/Cards';

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

export type CollectionFilters = {
  [field: string]: string | string[]
};

export enum MODAL_STATE { CLOSED, OPEN }

export enum PLAY_STYLE {
  STANDARD = 'STANDARD',
  WILD = 'WILD',
}
