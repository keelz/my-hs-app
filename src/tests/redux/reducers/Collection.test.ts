import { ModalState } from '../../../redux/Types';
import { CardClassName, ICard } from '../../../common/models/cards.model';
import reducer, {
  defaultState,
  collectionDeleteFilterAction,
  collectionSetActiveCardAction,
  collectionSetActiveClassNameAction,
  collectionSetFilterAction,
  collectionSetModalAction,
  collectionSetPaginationAction,
  COLLECTION_DELETE_FILTERS,
  COLLECTION_SET_ACTIVE_CARD,
  COLLECTION_SET_ACTIVE_CLASSNAME,
  COLLECTION_SET_FILTER,
  COLLECTION_SET_MODAL,
  COLLECTION_SET_PAGINATION,
} from '../../../redux/reducers/Collection';

const testData = require('../../../common/mocks/collection');

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
      const state = defaultState();
      expect(state).toMatchSnapshot();
    });
  });

  describe('action creators', () => {
    it(`dispatches ${COLLECTION_SET_MODAL} correctly`, () => {
      const dispatch = jest.fn();
      collectionSetModalAction(ModalState.OPEN)(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        type: COLLECTION_SET_MODAL,
        payload: { modal: ModalState.OPEN },
      });
    });

    it(`dispatches ${COLLECTION_DELETE_FILTERS} correctly`, () => {
      const dispatch = jest.fn();
      collectionDeleteFilterAction('test')(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        type: COLLECTION_DELETE_FILTERS,
        payload: {
          filters: { test: undefined },
        },
      });
    });

    it(`dispatches ${COLLECTION_SET_ACTIVE_CARD} correctly`, () => {
      const dispatch = jest.fn();
      collectionSetActiveCardAction(testData[0] as ICard)(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        type: COLLECTION_SET_ACTIVE_CARD,
        payload: { activeCard: testData[0] },
      });
    });

    it(`dispatches ${COLLECTION_SET_ACTIVE_CLASSNAME} correctly`, () => {
      const dispatch = jest.fn();
      collectionSetActiveClassNameAction('test')(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        type: COLLECTION_SET_ACTIVE_CLASSNAME,
        payload: { activeClassName: 'test' },
      });
    });

    it(`dispatches ${COLLECTION_SET_FILTER} correctly`, () => {
      const dispatch = jest.fn();
      collectionSetFilterAction('test', 'test')(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        type: COLLECTION_SET_FILTER,
        payload: {
          filters: { test: 'test' },
        },
      });
    });

    it(`dispatches ${COLLECTION_SET_PAGINATION} correctly`, () => {
      const dispatch = jest.fn();
      const pagination = {
        currentPage: 1,
        itemsPerPage: 10,
        pages: 1,
        total: 10,
      };
      collectionSetPaginationAction(pagination)(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        type: COLLECTION_SET_PAGINATION,
        payload: { pagination },
      });
    });
  });

  describe('reducer', () => {
    it(`handles ${COLLECTION_DELETE_FILTERS} correctly`, () => {
      const action = {
        type: COLLECTION_DELETE_FILTERS,
        payload: {
          ...defaultState(),
          filters: {
            test: 'test',
          },
        },
      };
      const activeState = {
        ...defaultState(),
        filters: { test: 'test', static: 'static' },
      };
      const result = reducer(activeState, action);
      expect(result).toEqual({
        ...defaultState(),
        filters: { static: 'static' },
      });
    });

    it(`handles ${COLLECTION_SET_ACTIVE_CLASSNAME} correctly`, () => {
      const action = {
        type: COLLECTION_SET_ACTIVE_CLASSNAME,
        payload: {
          ...defaultState(),
          activeClassName: 'test',
        },
      };
      const result = reducer(undefined, action);
      expect(result).toEqual({
        ...defaultState(),
        activeClassName: 'test',
      });
    });

    it(`handles ${COLLECTION_SET_ACTIVE_CLASSNAME} with null payload correctly`, () => {
      const action = { type: COLLECTION_SET_ACTIVE_CLASSNAME };
      const result = reducer(undefined, action);
      expect(result).toEqual({ ...defaultState() });
    });

    it('composes default state correctly', () => {
      const action = {
        type: 'UNKNOWN',
      };
      const state = reducer(undefined, action);
      expect(state).toEqual(defaultState());
    });

    it(`composes state for ${COLLECTION_SET_ACTIVE_CARD} correctly`, () => {
      const action = {
        type: COLLECTION_SET_ACTIVE_CARD,
        payload: {
          ...defaultState(),
          activeCard: testCard,
        },
      };
      const state = reducer(undefined, action);
      expect(state).toEqual(action.payload);
    });

    it(`composes state for ${COLLECTION_SET_MODAL} correctly`, () => {
      const action = {
        type: COLLECTION_SET_MODAL,
        payload: {
          ...defaultState(),
          modal: ModalState.OPEN,
        },
      };
      const state = reducer(defaultState(), action);
      expect(state).toEqual({
        ...defaultState(),
        modal: ModalState.OPEN,
      });
    });

    it(`handles ${COLLECTION_SET_FILTER} correctly`, () => {
      const action = {
        type: COLLECTION_SET_FILTER,
        payload: {
          ...defaultState(),
          filters: { test: 'test' },
        },
      };
      const result = reducer(undefined, action);
      expect(result).toEqual({
        ...defaultState(),
        filters: { test: 'test' },
      });
    });

    it(`handles ${COLLECTION_SET_FILTER} with null payload correctly`, () => {
      const action = {
        type: COLLECTION_SET_FILTER,
      };
      const result = reducer(undefined, action);
      expect(result).toEqual({ ...defaultState() });
    });

    it(`handles ${COLLECTION_SET_PAGINATION} correctly`, () => {
      const pagination = {
        currentPage: 1,
        itemsPerPage: 10,
        pages: 1,
        total: 10,
      };
      const action = {
        type: COLLECTION_SET_PAGINATION,
        payload: { ...defaultState(), pagination },
      };
      const result = reducer(undefined, action);
      expect(result).toEqual({ ...defaultState(), pagination });
      delete action.payload;
      const resultTwo = reducer(undefined, action);
      expect(resultTwo).toEqual({ ...defaultState() });
    });
  });
});
