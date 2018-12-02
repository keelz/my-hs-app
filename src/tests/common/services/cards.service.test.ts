import { composeMockStore } from '../../utils';
import middleware from '../../../redux/middleware/cards';
import service from '../../../common/services/cards.service';
import { CARDS_SET_PAGINATION } from '../../../redux/reducers/Cards';
import cards from '../../../common/mocks/collection';

const mockStore = composeMockStore(middleware);

describe('cards service', () => {
  let next = jest.fn();

  beforeEach(() => {
    next = jest.fn();
  });

  it('performs handleCardsSetFilterAction correctly', () => {
    const { action, next, store } = mockStore;
    store.getState = jest.fn(() => ({
      Cards: {
        activeClassName: 'DRUID',
        data: [...cards],
        filters: { cost: 3 },
      },
    }));
    const actionType = action('TEST')({ filters: { cost: 2 } });
    service.handleSetFilter(store)(next)(actionType);
    expect(next).toHaveBeenCalled();
  });

  it('performs handleCardsSetFilterAction correctly with matching values', () => {
    const { action, next, store } = mockStore;
    store.getState = jest.fn(() => ({
      Cards: {
        activeClassName: 'DRUID',
        data: [...cards],
        filters: { cost: 3 },
      },
    }));
    const actionType = action('TEST')({ filters: { cost: 3 } });
    service.handleSetFilter(store)(next)(actionType);
    expect(next).toHaveBeenCalled();
  });

  it('handles set pagination correctly', () => {
    const { store } = mockStore;
    service.handleSetPagination(store)(next)({
      type: 'TEST_ACTION',
    });
    expect(next).toHaveBeenCalledWith({
      type: 'TEST_ACTION',
    });
  });

  it('handles set pagination with current page less than zero correctly', () => {
    const { store } = mockStore;
    service.handleSetPagination(store)(next)({
      type: CARDS_SET_PAGINATION,
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
    service.handleSetPagination(store)(next)({
      type: CARDS_SET_PAGINATION,
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
    service.handleSetPagination(store)(next)({
      type: CARDS_SET_PAGINATION,
      payload: {
        pagination: {
          currentPage: 3,
          pages: 4,
        },
      },
    });
    expect(next).toHaveBeenCalledWith({
      type: CARDS_SET_PAGINATION,
      payload: {
        pagination: {
          currentPage: 3,
          pages: 4,
        },
      },
    });
  });
});
