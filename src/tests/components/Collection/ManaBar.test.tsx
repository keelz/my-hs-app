import * as React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import HSJSON from '../../../common/constants/hsJson';
import ManaBar, {
  composeLinkAction,
  composeManaGems
} from '../../../components/Collection/ManaBar';

const defaultProps = Object.freeze({
  setFilter: jest.fn(),
});

describe('Collection ManaBar', () => {
  describe('snapshots', () => {
    it('renders without crashing', () => {
      const tree = enzyme.shallow(<ManaBar {...defaultProps} />);
      expect(shallowToJson(tree)).toMatchSnapshot();
    });

    it('composes mana gems correctly', () => {
      const manaGems = composeManaGems();
      expect(manaGems).toMatchSnapshot();
    });
  });

  describe('helpers', () => {
    it('composes a link action correctly', () => {
      const testAction = jest.fn();
      const linkAction = composeLinkAction(testAction);
      linkAction(3);
      expect(testAction).toHaveBeenCalledWith(HSJSON.RESPONSE_PARAMS.COST, '3');
    });
  });
});
