import HSJSON from '../../../common/constants/hsJson';
import { CardResolution } from '../../../common/models/Cards.model';
import {
  composeAssetSource,
} from '../../../common/services/hsJson.service';

describe('hsJsonApi', () => {
  it('composes an asset source correctly', () => {
    const test = `${HSJSON.IMG_URI}/locale/${CardResolution.LARGE}x/id.ext`;
    const result = composeAssetSource(
      'id',
      'locale',
      CardResolution.LARGE,
      'ext'
    );
    expect(result).toBe(test);
  });
});
