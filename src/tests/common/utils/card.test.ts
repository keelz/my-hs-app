import { composeCardClassNames } from '../../../common/utils/card';
import mockCollection from '../../../common/mocks/collection';
import { ICard } from '../../../common/models/Card';

describe('card utilities', () => {
  it('composes card class names correctly', () => {
    const result = composeCardClassNames(mockCollection as ICard[]);
    expect(result).toMatchSnapshot();
  });
});
