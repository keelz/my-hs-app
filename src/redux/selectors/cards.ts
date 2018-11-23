import { createSelector } from 'reselect';
import HSJSON from '../../common/constants/hsJson';
import { IRootState } from '../Types';
import { ICard } from '../../common/models/Card';
import { composeCardClassNames } from '../../common/utils/card';

export class Accessors {
  /**
   * get active card class name.
   * @param state {IRootState}
   */
  public static getActiveCardClassName(state: IRootState): string {
    return state.Cards.activeClassName;
  }

  /**
   * get all cards.
   * @param state {IRootState}
   */
  public static getCards(state: IRootState): ICard[] {
    return state.Cards.data;
  }

  /**
   * get all Cards filters.
   * @param state {IRootState}
   */
  public static getFilters(state: IRootState): { [key: string]: string } {
    return state.Cards.filters;
  }
}

/**
 * get active card class name.
 * @param state {IRootState}
 */
export const selectActiveCardClassName = (state: IRootState): string =>
  createSelector(
    [Accessors.getActiveCardClassName],
    (className) => className
  )(state);

/**
 * get all unique card class names.
 * @param state {IRootState}
 */
export const selectCardClassNames = (state: IRootState) =>
  createSelector(
    [Accessors.getCards],
    (cards) => composeCardClassNames(cards)
  )(state);

/**
 * get all cards.
 * @param state {IRootState}
 */
export const selectCards = (state: IRootState): ICard[] =>
  createSelector(
    [Accessors.getCards],
    (cards) => cards
  )(state);

/**
 * get cards for active class name.
 * @param state {IRootState}
 */
export const selectCardsWithFilters = (state: IRootState): ICard[] =>
  createSelector(
    [
      Accessors.getActiveCardClassName,
      Accessors.getCards,
      Accessors.getFilters,
    ],
    (
      activeClassName: string,
      cards: ICard[],
      filters: { [key: string]: string }
    ) => cards
      // filter by active class name
      .filter(card => card.cardClass === activeClassName)
      // filter by card cost
      .filter(card => {
        const filter = filters[HSJSON.RESPONSE_PARAMS.COST];
        const response = !!filter
          ? parseInt(filter, 10) === 7
            ? card.cost >= 7
            : card.cost === parseInt(filter, 10)
          : true;
        return response;
      })
      // sort by cost
      .sort((a, b) => a.cost - b.cost)
      // sort by name
      .sort((a, b) => a.cost === b.cost
        ? a.name < b.name
          ? -1
          : 0
        : 0)
  )(state);
