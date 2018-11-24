import * as React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import HSJSON from '../../../common/constants/hsJson';
import ManaBar, {
  composeClickAction,
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

  describe('integration', () => {
    it('renders ManaGem components correctly', () => {
      const tree = enzyme.mount(<ManaBar {...defaultProps} />);
      const gems = tree.find('ManaGem');
      expect(gems).toHaveLength(8);
    });

    it('handles mana gem click event correctly', () => {
      const props = { ...defaultProps };
      const tree = enzyme.mount(<ManaBar {...props} />);
      const gem = tree.find('ManaGem').first();
      gem.simulate('click');
      expect(props.setFilter).toHaveBeenCalled();
    });
  });

  describe('helpers', () => {
    it('composes a link action correctly', () => {
      const testAction = jest.fn();
      const linkAction = composeClickAction(testAction);
      linkAction(3);
      expect(testAction).toHaveBeenCalledWith(HSJSON.RESPONSE_PARAMS.COST, '3');
    });
  });
});
