import cardsService from '../../../common/services/cards.service';
import { CARDS_SET_PAGINATION } from '../../../redux/reducers/Cards';

const mockReduxApi = {
  dispatch: jest.fn(),
  getState: jest.fn(),
  subscribe: jest.fn(),
};

describe('cards service', () => {
  let next = jest.fn();

  beforeEach(() => {
    next = jest.fn();
  });

  it('handles set pagination correctly', () => {
    cardsService.handleSetPagination(mockReduxApi)(next)({
      type: 'TEST_ACTION',
    });
    expect(next).toHaveBeenCalledWith({
      type: 'TEST_ACTION',
    });
  });

  it('handles set pagination with current page less than zero correctly', () => {
    cardsService.handleSetPagination(mockReduxApi)(next)({
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
    cardsService.handleSetPagination(mockReduxApi)(next)({
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
    cardsService.handleSetPagination(mockReduxApi)(next)({
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
