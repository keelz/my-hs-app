import { Dispatch } from 'redux';
import { AppMiddlewareApi, IActionType } from '../Types';
import { APP_DID_LOAD } from '../reducers/App';
import service, { IAppService } from '../../common/services/app.service';

export const composeMiddlewaqre = (appService: IAppService) =>
  (api: AppMiddlewareApi) =>
  (next: Dispatch<IActionType<any>>) =>
  (action: IActionType<any>) => {
    switch (action.type) {
      case APP_DID_LOAD:
        return appService.handleAppDidLoadAction(service.fetchCardsAction)(api)(next)(action);
      default:
        return next(action);
    }
  };

const appMiddleware = composeMiddlewaqre(service);

export default appMiddleware;
