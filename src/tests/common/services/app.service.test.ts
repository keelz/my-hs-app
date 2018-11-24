import { composeMockStore } from '../../utils';
import middleware from '../../../redux/middleware/App';
import {
  handleAppDidLoadAction,
  handleCardsSetFilterAction,
} from '../../../common/services/app.service';

const mockStore = composeMockStore(middleware);

describe('app.service', () => {
  it('performs handleAppDidLoadAction correctly', () => {
    const { action, next, store } = mockStore;
    const actionType = action('TEST')();
    const mockFetchAction = jest.fn(() => ({ data: [] }));
    return handleAppDidLoadAction(mockFetchAction)(store)(next)(actionType).then(() => {
      expect(next).toHaveBeenCalledWith({ type: 'TEST' });
      expect(mockFetchAction).toHaveBeenCalled();
    });
  });

  it('performs handleCardsSetFilterAction correctly', () => {
    const { action, next, store } = mockStore;
    store.getState = jest.fn(() => ({
      Cards: { filters: { cost: 3 } },
    }));
    const actionType = action('TEST')({ filters: { cost: 2 } });
    handleCardsSetFilterAction(store)(next)(actionType);
    expect(next).toHaveBeenCalled();
  });

  it('performs handleCardsSetFilterAction correctly with matching values', () => {
    const { action, next, store } = mockStore;
    store.getState = jest.fn(() => ({
      Cards: { filters: { cost: 3 } },
    }));
    const actionType = action('TEST')({ filters: { cost: 3 } });
    handleCardsSetFilterAction(store)(next)(actionType);
    expect(next).toHaveBeenCalled();
  });
});
