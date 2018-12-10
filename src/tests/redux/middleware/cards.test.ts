import { composeMiddleware } from '../../../redux/middleware/cards';
import { CardClassName } from '../../../common/models/cards.model';
import { CARDS_SET_CARDS } from '../../../redux/reducers/Cards';
import {
  COLLECTION_SET_PAGINATION,
  COLLECTION_SET_ACTIVE_CLASSNAME,
  COLLECTION_SET_FILTER,
} from '../../../redux/reducers/Collection';

const mockCardsService = {
  handleSetActiveClassname: jest.fn(() => jest.fn(() => jest.fn())),
  handleSetFilter: jest.fn(() => jest.fn(() => jest.fn())),
  handleSetPagination: jest.fn(() => jest.fn(() => jest.fn())),
  resetPagination: jest.fn(() => jest.fn()),
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

  it(`handles ${COLLECTION_SET_ACTIVE_CLASSNAME} correctly`, () => {
    const mw = composeMiddleware(mockCardsService);
    const action = {
      type: COLLECTION_SET_ACTIVE_CLASSNAME,
      payload: {
        activeClassName: CardClassName.HUNTER,
      },
    };
    mw(mockStore)(next)(action);
    expect(mockCardsService.handleSetActiveClassname).toHaveBeenCalled();
  });

  it(`handles ${CARDS_SET_CARDS} correctly`, () => {
    const mw = composeMiddleware(mockCardsService);
    const action = {
      type: CARDS_SET_CARDS,
      payload: { data: [] },
    };
    mw(mockStore)(next)(action);
    expect(next).toHaveBeenCalledWith(action);
    expect(mockCardsService.resetPagination).toHaveBeenCalled();
  });

  it(`handles ${COLLECTION_SET_FILTER} correctly`, () => {
    const mw = composeMiddleware(mockCardsService);
    const action = {
      type: COLLECTION_SET_FILTER,
      payload: {},
    };
    mw(mockStore)(next)(action);
    expect(mockCardsService.handleSetFilter).toHaveBeenCalled();
  });

  it(`handles ${COLLECTION_SET_PAGINATION} correctly`, () => {
    const mw = composeMiddleware(mockCardsService);
    const action = {
      type: COLLECTION_SET_PAGINATION,
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
