import { composeMiddleware } from '../../../redux/middleware/cards';
import { CARDS_SET_PAGINATION } from '../../../redux/reducers/Cards';

const mockCardsService = {
  handleSetPagination: jest.fn(() => jest.fn(() => jest.fn())),
};

const mockStore = {
  dispatch: jest.fn(),
  getState: jest.fn(),
  subscribe: jest.fn(),
};

const next = jest.fn();

describe('cards middleware', () => {
  it('handles an unknown action correctly', () => {
    const action = { type: 'UNKNOWN' };
    composeMiddleware(mockCardsService)(mockStore)(next)(action);
    expect(mockCardsService.handleSetPagination).not.toHaveBeenCalled();
    expect(next).toHaveBeenCalledWith({ type: 'UNKNOWN' });
  });

  it(`handles ${CARDS_SET_PAGINATION} correctly`, () => {
    const mw = composeMiddleware(mockCardsService);
    const action = {
      type: CARDS_SET_PAGINATION,
      payload: {
        pagination: {
          currentPage: 0,
          itemsPerPage: 10,
          pages: 5,
          total: 50,
        },
      },
    };
    mw(mockStore)(next)(action);
    expect(mockCardsService.handleSetPagination).toHaveBeenCalled();
  });
});
