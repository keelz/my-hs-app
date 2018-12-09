import reducer, {
  collectionStateFactory,
  setCollectionActiveCardAction,
  setCollectionModalAction,
  COLLECTION_SET_ACTIVE_CARD,
  COLLECTION_SET_MODAL,
} from '../../../redux/reducers/Collection';
import { ModalState } from '../../../redux/Types';
import { CardClassName } from '../../../common/models/cards.model';

const testCard = {
  cardClass: CardClassName.DRUID,
  cost: 4,
  flavor: 'test',
  id: 'test',
  name: 'test',
  text: 'test',
};

describe('Collection', () => {
  describe('factories', () => {
    it('composes state with factory correctly', () => {
      const state = collectionStateFactory();
      expect(state).toMatchSnapshot();
    });
  });

  describe('action creators', () => {
    it(`dispatches ${COLLECTION_SET_ACTIVE_CARD} correctly`, () => {
      const dispatch = jest.fn();
      setCollectionActiveCardAction(testCard)(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        type: COLLECTION_SET_ACTIVE_CARD,
        payload: { activeCard: { ...testCard } },
      });
    });

    it(`dispatches ${COLLECTION_SET_MODAL} correctly`, () => {
      const dispatch = jest.fn();
      setCollectionModalAction(ModalState.OPEN)(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        type: COLLECTION_SET_MODAL,
        payload: { modal: ModalState.OPEN },
      });
    });
  });

  describe('reducer', () => {
    it('composes default state correctly', () => {
      const action = {
        type: 'UNKNOWN',
      };
      const state = reducer(undefined, action);
      expect(state).toEqual(collectionStateFactory());
    });

    it(`composes state for ${COLLECTION_SET_ACTIVE_CARD} correctly`, () => {
      const action = {
        type: COLLECTION_SET_ACTIVE_CARD,
        payload: {
          ...collectionStateFactory(),
          activeCard: testCard,
        },
      };
      const state = reducer(undefined, action);
      expect(state).toEqual(action.payload);
    });

    it(`composes state for ${COLLECTION_SET_MODAL} correctly`, () => {
      const action = {
        type: COLLECTION_SET_MODAL,
        payload: { modal: ModalState.OPEN },
      };
      const state = reducer(collectionStateFactory(), action);
      expect(state).toEqual({
        ...collectionStateFactory(),
        modal: ModalState.OPEN,
      });
    });
  });
});
