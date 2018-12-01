import { MiddlewareAPI, Dispatch } from 'redux';
import { IActionType, IRootState } from '../../redux/Types';

export interface IComponentProps {
  className?: string | string[];
}

export interface IPagination {
  currentPage: number;
  itemsPerPage: number;
  pages: number;
  total: number;
}

export type AppMiddlewareApi = MiddlewareAPI<Dispatch<IActionType<any>>, IRootState>;

// todo: factor this to redux namespace.
export type MiddlewareOperation = (api: AppMiddlewareApi) =>
  (next: Dispatch<IActionType<any>>) =>
  (action: IActionType<any>) => void;

export enum BlockOrientation {
  TOP,
  RIGHT,
  BOTTOM,
  LEFT,
}
