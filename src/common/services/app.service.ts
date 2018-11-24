import { MiddlewareAPI, Dispatch } from 'redux';
import { IActionType, IRootState } from '../../redux/Types';
import { appSetLoadedAction } from '../../redux/reducers/App';
import { cardsSetCardsAction, cardsDeleteFilterAction } from '../../redux/reducers/Cards';
import HSJSON from '../constants/hsJson';
import hsJsonApi from './hsJsonApi';

export type AppMiddlewareApi = MiddlewareAPI<Dispatch<IActionType<any>>, IRootState>;

export type MiddlewareAction = (api: MiddlewareAPI<Dispatch<IActionType<any>>, IRootState>) =>
  (next: Dispatch<IActionType<any>>) =>
  (action: IActionType<any>) => void;

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
