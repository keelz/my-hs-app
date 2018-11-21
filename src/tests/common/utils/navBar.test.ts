import { composeTargets } from '../../../common/utils/navBar';

const mockCardClassNames = ['one', 'two', 'three'];
const mockAction = jest.fn();

describe('navBar utilities', () => {
  it('composes targets correctly', () => {
    const composedTargets = composeTargets(mockCardClassNames, mockAction);
    composedTargets[0].action && composedTargets[0].action();
    expect(composedTargets).toMatchSnapshot();
    expect(mockAction).toHaveBeenCalled();
  });
});
