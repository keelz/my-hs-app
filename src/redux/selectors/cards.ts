import { createSelector } from 'reselect';
import { IRootState } from '../Types';
import { ICard } from '../../common/models/Card';

class Accessors {
  /**
   * get all cards.
   * @param state {IRootState}
   */
  public static getCards(state: IRootState) {
    return state.Cards.data;
  }

  /**
   * get active class name.
   * @param state {IRootState}
   */
  public static getActiveClassName(state: IRootState) {
    return state.Cards.activeClassName;
  }
}

/**
 * get active class name.
 * @param state {IRootState}
 */
export const selectActiveClassName = (state: IRootState) =>
  createSelector(
    [Accessors.getActiveClassName],
    (className) => className
  )(state);

/**
 * get all cards.
 * @param state {IRootState}
 */
export const selectCards = (state: IRootState) =>
  createSelector(
    [Accessors.getCards],
    (cards) => cards
  )(state);

/**
 * get cards for active class name.
 * @param state {IRootState}
 */
export const selectCardsForActiveClassName = (state: IRootState) =>
  createSelector(
    [
      Accessors.getCards,
      Accessors.getActiveClassName,
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
