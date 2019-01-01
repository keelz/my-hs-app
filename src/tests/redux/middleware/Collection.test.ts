import { composeMiddleware } from '../../../redux/middleware/Collection';
import { CardClassName } from '../../../common/models/Cards.model';
import {
  COLLECTION_SET_PAGINATION,
  COLLECTION_SET_ACTIVE_CLASSNAME,
  COLLECTION_SET_FILTER,
} from '../../../redux/reducers/Collection';

const mockCollectionService = {
  setActiveClassname: jest.fn(() => jest.fn(() => jest.fn())),
  setFilter: jest.fn(() => jest.fn(() => jest.fn())),
  setPagination: jest.fn(() => jest.fn(() => jest.fn())),
  resetPagination: jest.fn(() => jest.fn()),
};

const mockStore = {
  dispatch: jest.fn(),
  getState: jest.fn(),
  subscribe: jest.fn(),
};

const next = jest.fn();

describe('collection middleware', () => {
  it('handles an unknown action correctly', () => {
    const action = { type: 'UNKNOWN' };
    composeMiddleware(mockCollectionService)(mockStore)(next)(action);
    expect(mockCollectionService.setPagination).not.toHaveBeenCalled();
    expect(next).toHaveBeenCalledWith({ type: 'UNKNOWN' });
  });

  it(`handles ${COLLECTION_SET_ACTIVE_CLASSNAME} correctly`, () => {
    const mw = composeMiddleware(mockCollectionService);
    const action = {
      type: COLLECTION_SET_ACTIVE_CLASSNAME,
      payload: {
        activeClassName: CardClassName.HUNTER,
      },
    };
    mw(mockStore)(next)(action);
    expect(mockCollectionService.setActiveClassname).toHaveBeenCalled();
  });

  it(`handles ${COLLECTION_SET_FILTER} correctly`, () => {
    const mw = composeMiddleware(mockCollectionService);
    const action = {
      type: COLLECTION_SET_FILTER,
      payload: {},
    };
    mw(mockStore)(next)(action);
    expect(mockCollectionService.setFilter).toHaveBeenCalled();
  });

  it(`handles ${COLLECTION_SET_PAGINATION} correctly`, () => {
    const mw = composeMiddleware(mockCollectionService);
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
    expect(mockCollectionService.setPagination).toHaveBeenCalled();
  });
});
