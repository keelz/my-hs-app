import reducer, {
  collectionStateFactory,
  COLLECTION_SET_MODAL,
  setCollectionModalAction,
} from '../../../redux/reducers/Collection';
import { ModalState } from '../../../redux/Types';

describe('Collection Reducer', () => {
  it('composes state with factory correctly', () => {
    const state = collectionStateFactory();
    expect(state).toMatchSnapshot();
  });

  it(`dispatches ${COLLECTION_SET_MODAL} correctly`, () => {
    const dispatch = jest.fn();
    setCollectionModalAction(ModalState.OPEN)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: COLLECTION_SET_MODAL,
      payload: { modal: ModalState.OPEN },
    });
  });

  it('composes default state correctly', () => {
    const action = {
      type: 'UNKNOWN',
    };
    const state = reducer(undefined, action);
    expect(state).toEqual(collectionStateFactory());
  });

  it(`composes state for ${COLLECTION_SET_MODAL} correctly`, () => {
    const action = {
      type: COLLECTION_SET_MODAL,
      payload: { modal: ModalState.OPEN },
    };
    const state = reducer(collectionStateFactory(), action);
    expect(state).toEqual({
      ...collectionStateFactory(),
      modal: ModalState.OPEN,
    });
  });
});
