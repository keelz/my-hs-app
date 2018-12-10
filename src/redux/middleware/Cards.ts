import { Dispatch } from 'redux';
import { AppMiddlewareApi, IActionType } from '../Types';
import { CARDS_SET_CARDS } from '../reducers/Cards';
import collectionService, {
  ICollectionService,
} from '../../common/services/collection.service';

export const composeMiddleware = (service: ICollectionService) =>
  (api: AppMiddlewareApi) =>
  (next: Dispatch<IActionType<any>>) =>
  (action: IActionType<any>) => {
    const { type } = action;
    switch (type) {
      case CARDS_SET_CARDS:
        next(action);
        service.resetPagination(api)(action);
        return;
      default:
        return next(action);
    }
  };

const middleware = composeMiddleware(collectionService);

export default middleware;
