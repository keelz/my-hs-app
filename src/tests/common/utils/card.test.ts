import { composeCardClassNames } from '../../../common/utils/cards.util';
import mockCollection from '../../../common/mocks/collection';
import { ICard } from '../../../common/models/cards.model';

describe('card utilities', () => {
  it('composes card class names correctly', () => {
    const result = composeCardClassNames(mockCollection as ICard[]);
    expect(result).toMatchSnapshot();
  });
});
