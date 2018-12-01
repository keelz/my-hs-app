import { MiddlewareAPI, Dispatch } from 'redux';
import { IActionType } from '../../redux/Types';
import { ICardsState } from '../../redux/reducers/Cards';
import { MiddlewareOperation } from '../models/app.model';

export interface ICardsService {
  handleSetPagination: MiddlewareOperation;
}

const service: ICardsService = {
  handleSetPagination: (api: MiddlewareAPI) =>
    (next: Dispatch<IActionType<any>>) =>
    (action: IActionType<ICardsState>) => {
      const { payload } = action;
      // pass through if payload is undefined.
      if (undefined === payload) return next(action);
      // deconstruct pagination properties from payload.
      const { currentPage, pages } = payload.pagination;
      // prevent paging backward.
      if (currentPage < 0) return;
      // prevent paging forward.
      if (currentPage === pages) return;
      // pass through.
      return next(action);
    },
};

export default service;
