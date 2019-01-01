import { composeMockStore } from '../../utils';
import middleware from '../../../redux/middleware/Collection';
import service from '../../../common/services/collection.service';
import cards from '../../../common/mocks/collection';
import { CardClassName } from '../../../common/models/Cards.model';
import {
  COLLECTION_SET_PAGINATION,
  COLLECTION_SET_ACTIVE_CLASSNAME,
} from '../../../redux/reducers/Collection';

const mockStore = composeMockStore(middleware);

describe('cards service', () => {
  let next = jest.fn();

  beforeEach(() => {
    next = jest.fn();
  });

  it('performs handleSetActiveClassname correctly', () => {
    const { action, next, setState, store } = composeMockStore(middleware);
    const { setActiveClassname } = service;
    setState({
      Collection: {
        activeClassName: CardClassName.DRUID,
      },
    });
    const nextAction = action(COLLECTION_SET_ACTIVE_CLASSNAME)({
      activeClassName: CardClassName.DRUID,
    });
    setActiveClassname(store)(next)(nextAction);
    expect(next).not.toHaveBeenCalled();
    setState({
      Cards: {
        data: [...cards].slice(0, 49),
      },
      Collection: {
        activeClassName: CardClassName.HUNTER,
        filters: {},
      },
    });
    setActiveClassname(store)(next)(nextAction);
    expect(next).toHaveBeenCalledWith({
      type: COLLECTION_SET_ACTIVE_CLASSNAME,
      payload: {
        activeClassName: CardClassName.DRUID,
      },
    });
  });

  it('performs handleCardsSetFilterAction correctly', () => {
    const { action, next, store } = mockStore;
    store.getState = jest.fn(() => ({
      Cards: {
        data: [...cards],
      },
      Collection: {
        activeClassName: 'DRUID',
        filters: { cost: 3 },
      },
    }));
    const actionType = action('TEST')({ filters: { cost: 2 } });
    service.setFilter(store)(next)(actionType);
    expect(next).toHaveBeenCalled();
  });

  it('performs handleCardsSetFilterAction correctly with matching values', () => {
    const { action, next, store } = mockStore;
    store.getState = jest.fn(() => ({
      Cards: {
        data: [...cards],
      },
      Collection: {
        activeClassName: 'DRUID',
        filters: { cost: 3 },
      },
    }));
    const actionType = action('TEST')({ filters: { cost: 3 } });
    service.setFilter(store)(next)(actionType);
    expect(next).toHaveBeenCalled();
  });

  it('handles set pagination correctly', () => {
    const { store } = mockStore;
    service.setPagination(store)(next)({
      type: 'TEST_ACTION',
    });
    expect(next).toHaveBeenCalledWith({
      type: 'TEST_ACTION',
    });
  });

  it('handles set pagination with current page less than zero correctly', () => {
    const { store } = mockStore;
    service.setPagination(store)(next)({
      type: COLLECTION_SET_PAGINATION,
      payload: {
        pagination: {
          currentPage: -1,
        },
      },
    });
    expect(next).not.toHaveBeenCalled();
  });

  it('handles set pagination with current page greater than or equall to pages correctly', () => {
    const { store } = mockStore;
    service.setPagination(store)(next)({
      type: COLLECTION_SET_PAGINATION,
      payload: {
        pagination: {
          currentPage: 4,
          pages: 3,
        },
      },
    });
    expect(next).not.toHaveBeenCalled();
  });

  it('handles set pagination with current page within valid range correctly', () => {
    const { store } = mockStore;
    service.setPagination(store)(next)({
      type: COLLECTION_SET_PAGINATION,
      payload: {
        pagination: {
          currentPage: 3,
          pages: 4,
        },
      },
    });
    expect(next).toHaveBeenCalledWith({
      type: COLLECTION_SET_PAGINATION,
      payload: {
        pagination: {
          currentPage: 3,
          pages: 4,
        },
      },
    });
  });
});
