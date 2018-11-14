import store from '../../redux/store';

describe('redux store', () => {
  it('returns a store correctly', () => {
    expect(store).not.toBeFalsy();
  });

  it('composes the default development state correctly', () => {
    const state = store.getState();
    expect(state).toMatchSnapshot();
  });
});
