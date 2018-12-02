import { MiddlewareAPI, Dispatch } from 'redux';
import { IActionType } from '../Types';
import cardsService, { ICardsService } from '../../common/services/cards.service';
import { CARDS_SET_PAGINATION } from '../reducers/Cards';

export const composeMiddleware = (service: ICardsService) =>
  (api: MiddlewareAPI) =>
  (next: Dispatch<IActionType<any>>) =>
  (action: IActionType<any>) => {
    switch (action.type) {
      case CARDS_SET_PAGINATION:
        return service.handleSetPagination(api)(next)(action);
      default: return next(action);
    }
  };

const middleware = composeMiddleware(cardsService);

export default middleware;
