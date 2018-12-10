import * as Reducer from '../../../redux/reducers/Cards';
import mockData from '../../../common/mocks/collection';
import { ICard } from '../../../common/models/Cards.model';

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
  });

  describe('reducer', () => {
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
  });
});
