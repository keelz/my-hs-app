import { composeMiddlewaqre } from '../../../redux/middleware/App';
import { composeMockStore, IMockStore } from '../../utils';
import { APP_DID_LOAD } from '../../../redux/reducers/App';
import { IAppService } from '../../../common/services/app.service';

describe('App middleware', () => {
  let mockService: IAppService;
  let mockStore: IMockStore;

  beforeEach(() => {
    mockService = {
      fetchCardsAction: jest.fn(),
      handleAppDidLoadAction: jest.fn(() => jest.fn(() => jest.fn(() => jest.fn()))),
    };
    mockStore = composeMockStore(composeMiddlewaqre(mockService));
  });

  it(`handles ${APP_DID_LOAD} correctly`, () => {
    const { action, invoke } = mockStore;
    const actionType = action(APP_DID_LOAD)();
    invoke(actionType);
    expect(mockService.handleAppDidLoadAction).toHaveBeenCalled();
  });

  it('handles unknown action correctly', () => {
    const { action, invoke, next } = mockStore;
    const actionType = action('UNKNOWN')();
    invoke(actionType);
    expect(next).toHaveBeenCalledWith(actionType);
  });
});
