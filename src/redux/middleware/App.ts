import { Dispatch } from 'redux';
import { IActionType } from '../Types';
import { CARDS_SET_FILTER } from '../reducers/Cards';
import { APP_DID_LOAD } from '../reducers/App';
import {
  handleAppDidLoadAction,
  handleCardsSetFilterAction,
  AppMiddlewareApi,
  MiddlewareAction,
} from '../../common/services/app.service';

interface IAppService {
  handleAppDidLoadAction: MiddlewareAction;
  handleCardsSetFilterAction: MiddlewareAction;
}

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

const appMiddleware = composeMiddlewaqre({
  handleAppDidLoadAction,
  handleCardsSetFilterAction,
});

export default appMiddleware;
