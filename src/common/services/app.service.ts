import { Dispatch } from 'redux';
import { AppMiddlewareApi, MiddlewareAction } from '../models/App';
import HSJSON from '../constants/hsJson';
import hsJsonApi from './hsJsonApi';
import { IActionType } from '../../redux/Types';
import { appSetLoadedAction } from '../../redux/reducers/App';
import {
  cardsSetCardsAction,
  cardsDeleteFilterAction,
} from '../../redux/reducers/Cards';

export interface IAppService {
  handleAppDidLoadAction: MiddlewareAction;
  handleCardsSetFilterAction: MiddlewareAction;
}

export const handleAppDidLoadAction = (api: AppMiddlewareApi) =>
  (next: Dispatch<IActionType<any>>) =>
  async (action: IActionType<any>) => {
    next(action);
    const response = await hsJsonApi.read(HSJSON.PATH.READ.LATEST);
    cardsSetCardsAction(response.data)(api.dispatch);
    appSetLoadedAction(true)(api.dispatch);
    return;
  };

export const handleCardsSetFilterAction = (api: AppMiddlewareApi) =>
  (next: Dispatch<IActionType<any>>) =>
  (action: IActionType<any>) => {
    const state = api.getState();
    const currentFilters = state.Cards.filters;
    const newFilters = action.payload.filters;
    if (!!newFilters[HSJSON.RESPONSE_PARAMS.COST]
      && !!currentFilters[HSJSON.RESPONSE_PARAMS.COST]
      && newFilters[HSJSON.RESPONSE_PARAMS.COST]
      === currentFilters[HSJSON.RESPONSE_PARAMS.COST]) {
      cardsDeleteFilterAction(HSJSON.RESPONSE_PARAMS.COST)(api.dispatch);
      return;
    }
    next(action);
    return;
  };

const service: IAppService = {
  handleAppDidLoadAction,
  handleCardsSetFilterAction,
};

export default service;
