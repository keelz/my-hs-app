import { composeMiddleware } from '../../../redux/middleware/Cards';
import { CARDS_SET_CARDS } from '../../../redux/reducers/Cards';

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

describe('cards middleware', () => {
  it('handles an unknown action correctly', () => {
    const action = { type: 'UNKNOWN' };
    composeMiddleware(mockCollectionService)(mockStore)(next)(action);
    expect(mockCollectionService.setPagination).not.toHaveBeenCalled();
    expect(next).toHaveBeenCalledWith({ type: 'UNKNOWN' });
  });

  it(`handles ${CARDS_SET_CARDS} correctly`, () => {
    const mw = composeMiddleware(mockCollectionService);
    const action = {
      type: CARDS_SET_CARDS,
      payload: { data: [] },
    };
    mw(mockStore)(next)(action);
    expect(next).toHaveBeenCalledWith(action);
    expect(mockCollectionService.resetPagination).toHaveBeenCalled();
  });
});
