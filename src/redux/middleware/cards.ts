import { Dispatch } from 'redux';
import { AppMiddlewareApi, IActionType } from '../Types';
import cardsService, { ICardsService } from '../../common/services/cards.service';
import { CARDS_SET_CARDS } from '../reducers/Cards';
import {
  COLLECTION_SET_ACTIVE_CLASSNAME,
  COLLECTION_SET_FILTER,
  COLLECTION_SET_PAGINATION,
} from '../reducers/Collection';

export const composeMiddleware = (service: ICardsService) =>
  (api: AppMiddlewareApi) =>
  (next: Dispatch<IActionType<any>>) =>
  (action: IActionType<any>) => {
    switch (action.type) {
      case COLLECTION_SET_ACTIVE_CLASSNAME:
        return service.handleSetActiveClassname(api)(next)(action);
      case CARDS_SET_CARDS:
        next(action);
        service.resetPagination(api)(action);
        return;
      case COLLECTION_SET_FILTER:
        return service.handleSetFilter(api)(next)(action);
      case COLLECTION_SET_PAGINATION:
        return service.handleSetPagination(api)(next)(action);
      default:
        return next(action);
    }
  };

const middleware = composeMiddleware(cardsService);

export default middleware;
