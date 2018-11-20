import { createSelector } from 'reselect';
import { IRootState } from '../Types';
import { ICard } from '../../common/models/Card';

export class Accessors {
  /**
   * get all cards.
   * @param state {IRootState}
   */
  public static getCards(state: IRootState): ICard[] {
    return state.Cards.data;
  }

  /**
   * get active card class name.
   * @param state {IRootState}
   */
  public static getActiveCardClassName(state: IRootState): string {
    return state.Cards.activeClassName;
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
export const selectCardsForActiveClassName = (state: IRootState): ICard[] =>
  createSelector(
    [
      Accessors.getCards,
      Accessors.getActiveCardClassName,
    ],
    (cards: ICard[], activeClassName: string) =>
      cards
        // filter by active class name
        .filter(c => c.cardClass === activeClassName)
        // sort by cost
        .sort((a, b) => a.cost - b.cost)
        // sort by name
        .sort((a, b) => a.cost === b.cost
          ? a.name < b.name
            ? -1
            : 0
          : 0)
  )(state);
