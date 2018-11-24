import { Dispatch } from 'redux';
import { IActionType } from '../Types';
import { CARDS_SET_FILTER } from '../reducers/Cards';
import { APP_DID_LOAD } from '../reducers/App';
import { AppMiddlewareApi } from '../../common/models/App';
import {
  default as appService,
  IAppService,
} from '../../common/services/app.service';

export const composeMiddlewaqre = (appService: IAppService) =>
  (api: AppMiddlewareApi) =>
  (next: Dispatch<IActionType<any>>) =>
  (action: IActionType<any>) => {
    switch (action.type) {
      case APP_DID_LOAD:
        return appService.handleAppDidLoadAction(api)(next)(action);
      case CARDS_SET_FILTER:
        return appService.handleCardsSetFilterAction(api)(next)(action);
      default:
        return next(action);
    }
  };

const appMiddleware = composeMiddlewaqre(appService);

export default appMiddleware;
