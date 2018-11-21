import * as Selector from '../../../redux/selectors/cards';
import { IRootState } from '../../../redux/Types';
import { defaultState as cardState } from '../../../redux/reducers/Cards';
import { ICard } from '../../../common/models/Card';
import testData from '../../../common/mocks/collection';

const composeState = () => ({
  Cards: {
    ...cardState(),
    data: [...testData].slice(0, 50) as ICard[],
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
  });

  describe('selectors', () => {
    const {
      selectActiveCardClassName,
      selectCardClassNames,
      selectCards,
      selectCardsForActiveClassName,
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

    it('selects cards for active class name correctly', () => {
      const result = selectCardsForActiveClassName(composeState());
      expect(result).toMatchSnapshot();
    });
  });
});
