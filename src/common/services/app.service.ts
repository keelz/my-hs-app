import { Dispatch } from 'redux';
import { AxiosPromise } from 'axios';
import { AppMiddlewareApi, AsyncMiddlewareOperation } from '../models/app.model';
import { IActionType } from '../../redux/Types';
import { ICard } from '../models/cards.model';
import { appSetLoadedAction } from '../../redux/reducers/App';
import { cardsSetCardsAction } from '../../redux/reducers/Cards';
import HSJSON from '../constants/hsJson';
import hsJsonApi from './hsJson.service';

export interface IAppService {
  fetchCardsAction: () => AxiosPromise<ICard[]>;
  handleAppDidLoadAction: (fetchAction: () => AxiosPromise<any>) => AsyncMiddlewareOperation;
}

const service: IAppService = {
  fetchCardsAction: (): AxiosPromise<ICard[]> =>
    hsJsonApi.read(HSJSON.PATH.READ.LATEST),

  /**
   * handle app loading event side effects.
   * toggle loading animation
   * fetch hsjson data
   * saturate state
   * @param api {AppMiddlewareApi}
   */
  handleAppDidLoadAction: (fetchAction: () => AxiosPromise<ICard[]>) =>
    (api: AppMiddlewareApi) =>
    (next: Dispatch<IActionType<any>>) =>
    async (action: IActionType<any>) => {
      next(action);
      const response = await fetchAction();
      cardsSetCardsAction(response.data)(api.dispatch);
      appSetLoadedAction(true)(api.dispatch);
      return;
    },
};

export default service;
