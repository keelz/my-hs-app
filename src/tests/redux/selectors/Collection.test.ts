import * as Selector from '../../../redux/selectors/Collection';
import APP from '../../../common/constants/app';
import HSJSON from '../../../common/constants/hsJson';
import { IRootState, PLAY_STYLE } from '../../../redux/Types';
import { defaultState as cardsStateFactory } from '../../../redux/reducers/Cards';
import { defaultState as collectionStateFactory } from '../../../redux/reducers/Collection';
import { ICard } from '../../../common/models/Cards.model';
import testData from '../../../common/mocks/collection';

const { FILTERS } = APP.COLLECTION;

const composeState = () => ({
  Cards: {
    ...cardsStateFactory(),
    data: [...testData].slice(0, 200) as ICard[],
  },
  Collection: {
    ...collectionStateFactory(),
    pagination: {
      currentPage: 0,
      itemsPerPage: 10,
      pages: 1,
      total: 10,
    },
  },
}) as IRootState;

describe('cards selector', () => {
  describe('accessors', () => {
    const { Accessors } = Selector;

    it('returns cards state correctly', () => {
      const cards = Accessors.getCards(composeState());
      expect(cards).toMatchSnapshot();
    });

    it('returns active class name correctly', () => {
      const activeClassName = Accessors.getActiveCardClassName(composeState());
      expect(activeClassName).toBe('DRUID');
    });

    it('returns pagination object correctly', () => {
      const pagination = Accessors.getPagination(composeState());
      expect(pagination).toMatchSnapshot();
    });
  });

  describe('selectors', () => {
    const {
      selectActiveCardClassName,
      selectCardClassNames,
      selectCards,
      selectCardsWithFilters,
      selectPaginatedCards,
    } = Selector;

    it('selects active class name correctly', () => {
      const result = selectActiveCardClassName(composeState());
      expect(result).toBe('DRUID');
    });

    it('selects card class names correctly', () => {
      const result = selectCardClassNames(composeState());
      expect(result).toMatchSnapshot();
    });

    it('selects cards correctly', () => {
      const result = selectCards(composeState());
      expect(result).toMatchSnapshot();
    });

    it('selects cards with filters correctly', () => {
      const state = composeState();
      state.Collection.filters = {
        [HSJSON.RESPONSE_PARAMS.COST]: '2',
        [FILTERS.PLAY_STYLE]: PLAY_STYLE.STANDARD,
      };
      const result = selectCardsWithFilters(state);
      expect(result).toMatchSnapshot();
    });

    it('selects cards with greater than or equal to 7 cost correctly', () => {
      const state = composeState();
      state.Collection.filters = { [HSJSON.RESPONSE_PARAMS.COST]: '7' };
      const result = selectCardsWithFilters(state);
      expect(result).toMatchSnapshot();
    });

    it('selects paginated cards correctly', () => {
      const state = composeState();
      const result = selectPaginatedCards(state);
      expect(result).toMatchSnapshot();
    });
  });
});
