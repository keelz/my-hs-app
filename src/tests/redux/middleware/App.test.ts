import { composeMiddlewaqre } from '../../../redux/middleware/App';
import { composeMockStore, IMockStore } from '../../utils';
import { APP_DID_LOAD } from '../../../redux/reducers/App';
import { CARDS_SET_FILTER } from '../../../redux/reducers/Cards';
import { IAppService } from '../../../common/services/app.service';

describe('App middleware', () => {
  let mockService: IAppService;
  let mockStore: IMockStore;

  beforeEach(() => {
    mockService = {
      handleAppDidLoadAction: jest.fn(() => jest.fn(() => jest.fn(() => jest.fn()))),
      handleCardsSetFilterAction: jest.fn(() => jest.fn(() => jest.fn())),
    };
    mockStore = composeMockStore(composeMiddlewaqre(mockService));
  });

  it(`handles ${APP_DID_LOAD} correctly`, () => {
    const { action, invoke } = mockStore;
    const actionType = action(APP_DID_LOAD)();
    invoke(actionType);
    expect(mockService.handleAppDidLoadAction).toHaveBeenCalled();
  });

  it(`handles ${CARDS_SET_FILTER} correctly`, () => {
    const { action, invoke } = mockStore;
    const actionType = action(CARDS_SET_FILTER)({
      filters: { card: '1' },
    });
    invoke(actionType);
    expect(mockService.handleCardsSetFilterAction).toHaveBeenCalled();
  });

  it('handles unknown action correctly', () => {
    const { action, invoke, next } = mockStore;
    const actionType = action('UNKNOWN')();
    invoke(actionType);
    expect(next).toHaveBeenCalledWith(actionType);
  });
});
