import { composeMockStore } from '../../utils';
import middleware from '../../../redux/middleware/App';
import service from '../../../common/services/app.service';

const mockStore = composeMockStore(middleware);

describe('app.service', () => {
  it('performs handleAppDidLoadAction correctly', () => {
    const { action, next, store } = mockStore;
    const actionType = action('TEST')();
    const mockFetchAction = jest.fn(() => ({ data: [] }));
    return service
      .handleAppDidLoadAction(mockFetchAction)(store)(next)(actionType)
      .then(() => {
        expect(next).toHaveBeenCalledWith({ type: 'TEST' });
        expect(mockFetchAction).toHaveBeenCalled();
      });
  });

  it('composes a fetch cards promise correctly', () => {
    const p = service.fetchCardsAction();
    expect(p instanceof Promise).toBe(true);
  });
});
