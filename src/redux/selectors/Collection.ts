import { createSelector } from 'reselect';
import APP from '../../common/constants/app';
import HSJSON from '../../common/constants/hsJson';
import { IPagination } from '../../common/models/App.model';
import { IRootState, PLAY_STYLE, CollectionFilters } from '../Types';
import { ICard, standardSet } from '../../common/models/Cards.model';
import { composeCardClassNames } from '../../common/utils/cards.util';

const { FILTERS } = APP.COLLECTION;

export class Accessors {
  /**
   * get active card class name.
   * @param state {IRootState}
   */
  public static getActiveCardClassName(state: IRootState): string {
    return state.Collection.activeClassName;
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
  public static getFilters(state: IRootState): CollectionFilters {
    return state.Collection.filters;
  }

  /**
   * get collection pagination object.
   * @param state {IRootState}
   */
  public static getPagination(state: IRootState): IPagination {
    return state.Collection.pagination;
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
 * select active card sets, sorted
 * @param state {IRootState}
 */
export const selectActiveSets = (state: IRootState): string[] =>
  createSelector(
    [
      Accessors.getCards,
      Accessors.getFilters,
    ],
    (
      cards,
      filters
    ) => cards.reduce(
    (a, card) => {
      if (a.indexOf(card.set) >= 0) return a;
      const isStandard = filters[APP.COLLECTION.FILTERS.PLAY_STYLE] === PLAY_STYLE.STANDARD;
      if (isStandard && standardSet.indexOf(card.set) < 0) return a;
      return [...a, card.set];
    },
    Array(0)
  ).sort())(state);

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
      // filter only cards that have a cost property.
      .filter(card => undefined !== card.cost)
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
      // filter by play style
      .filter(card => !!filters[FILTERS.PLAY_STYLE]
        && filters[FILTERS.PLAY_STYLE] === PLAY_STYLE.STANDARD
          ? standardSet.indexOf(card.set) > -1
          : true)
      // sort by cost
      .sort((a, b) => a.cost - b.cost)
      // sort by name
      .sort((a, b) => a.cost === b.cost
        ? a.name < b.name
          ? -1
          : 0
        : 0)
  )(state);

/**
 * select filtered and sorted cards sliced with pagination values.
 * @param state {IRootState}
 */
export const selectPaginatedCards = (state: IRootState): ICard[] =>
  createSelector(
    [Accessors.getPagination],
    (pagination) => selectCardsWithFilters(state).slice(
      pagination.itemsPerPage * pagination.currentPage,
      (pagination.itemsPerPage * pagination.currentPage) + pagination.itemsPerPage
    )
  )(state);
