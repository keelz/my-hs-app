import { Dispatch } from 'redux';
import { AppMiddlewareApi, IActionType } from '../Types';
import cardsService, { ICardsService } from '../../common/services/cards.service';
import {
  CARDS_SET_ACTIVE_CLASSNAME,
  CARDS_SET_CARDS,
  CARDS_SET_FILTER,
  CARDS_SET_PAGINATION,
} from '../reducers/Cards';

export const composeMiddleware = (service: ICardsService) =>
  (api: AppMiddlewareApi) =>
  (next: Dispatch<IActionType<any>>) =>
  (action: IActionType<any>) => {
    switch (action.type) {
      case CARDS_SET_ACTIVE_CLASSNAME:
        return service.handleSetActiveClassname(api)(next)(action);
      case CARDS_SET_CARDS:
        next(action);
        service.resetPagination(api)(action);
        return;
      case CARDS_SET_FILTER:
        return service.handleSetFilter(api)(next)(action);
      case CARDS_SET_PAGINATION:
        return service.handleSetPagination(api)(next)(action);
      default:
        return next(action);
    }
  };

const middleware = composeMiddleware(cardsService);

export default middleware;
