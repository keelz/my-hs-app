import { MiddlewareAPI, Dispatch } from 'redux';
import { IActionType, IRootState } from '../../redux/Types';

export interface IComponentProps {
  className?: string | string[];
}

export type AppMiddlewareApi = MiddlewareAPI<Dispatch<IActionType<any>>, IRootState>;

export type MiddlewareAction = (api: AppMiddlewareApi) =>
  (next: Dispatch<IActionType<any>>) =>
  (action: IActionType<any>) => void;

export enum BlockOrientation {
  TOP,
  RIGHT,
  BOTTOM,
  LEFT,
}
