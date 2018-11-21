import * as Reducer from '../../../redux/reducers/Cards';
import mockData from '../../../common/mocks/collection';
import { ICard } from '../../../common/models/Card';

describe('Cards Reducer', () => {
  describe('snapshots', () => {
    it('composes default state correctly', () => {
      const { defaultState } = Reducer;
      const result = defaultState();
      expect(result).toMatchSnapshot();
    });

    it('composes state correctly', () => {
      const { defaultState } = Reducer;
      const result = Reducer.default(defaultState(), { type: 'TEST' });
      expect(result).toMatchSnapshot();
    });
  });

  describe('action creators', () => {
    it(`dispatches ${Reducer.CARDS_SET_CARDS} correctly`, () => {
      const dispatch = jest.fn();
      const {
        cardsSetCardsAction,
        CARDS_SET_CARDS,
      } = Reducer;
      cardsSetCardsAction(mockData as ICard[])(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        type: CARDS_SET_CARDS,
        payload: { data: mockData },
      });
    });

    it(`dispatches ${Reducer.CARDS_SET_ACTIVE_CLASSNAME} correctly`, () => {
      const dispatch = jest.fn();
      const {
        cardsSetActiveClassNameAction,
        CARDS_SET_ACTIVE_CLASSNAME,
      } = Reducer;
      cardsSetActiveClassNameAction('test')(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        type: CARDS_SET_ACTIVE_CLASSNAME,
        payload: { activeClassName: 'test' },
      });
    });
  });

  describe('reducer', () => {
    it(`handles ${Reducer.CARDS_SET_ACTIVE_CLASSNAME} correctly`, () => {
      const action = {
        type: Reducer.CARDS_SET_ACTIVE_CLASSNAME,
        payload: {
          ...Reducer.defaultState(),
          activeClassName: 'test',
        },
      };
      const result = Reducer.default(undefined, action);
      expect(result).toEqual({
        ...Reducer.defaultState(),
        activeClassName: 'test',
      });
    });

    it(`handles ${Reducer.CARDS_SET_ACTIVE_CLASSNAME} with null payload correctly`, () => {
      const action = { type: Reducer.CARDS_SET_ACTIVE_CLASSNAME };
      const result = Reducer.default(undefined, action);
      expect(result).toEqual({ ...Reducer.defaultState() });
    });

    it(`handles ${Reducer.CARDS_SET_CARDS} correctly`, () => {
      const testData = mockData.slice(0, 3) as ICard[];
      const action = {
        type: Reducer.CARDS_SET_CARDS,
        payload: {
          ...Reducer.defaultState(),
          data: [...testData],
        },
      };
      const result = Reducer.default(undefined, action);
      expect(result).toEqual({
        ...Reducer.defaultState(),
        data: [...testData],
      });
    });

    it(`handles ${Reducer.CARDS_SET_CARDS} with null payload correctly`, () => {
      const action = {
        type: Reducer.CARDS_SET_CARDS,
      };
      const result = Reducer.default(undefined, action);
      expect(result).toEqual({ ...Reducer.defaultState() });
    });
  });
});
