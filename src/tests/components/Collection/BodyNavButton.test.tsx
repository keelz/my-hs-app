import * as React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { BlockOrientation } from '../../../common/models/app.model';
import BodyNavButton from '../../../components/Collection/BodyNavButton';

describe('Collect BodyNavButton', () => {
  describe('snapshots', () => {
    it('renders without crashing', () => {
      const tree = enzyme.shallow(<BodyNavButton align={BlockOrientation.LEFT} />);
      expect(shallowToJson(tree)).toMatchSnapshot();
    });

    it('renders with orientation right correctly', () => {
      const tree = enzyme.shallow(<BodyNavButton align={BlockOrientation.RIGHT} />);
      expect(shallowToJson(tree)).toMatchSnapshot();
    });
  });

  describe('integration', () => {
    it('handles onClick event correctly', () => {
      const onClick = jest.fn();
      const tree = enzyme.mount(<BodyNavButton
        align={BlockOrientation.LEFT}
        onClick={onClick} />);
      tree.simulate('click');
      expect(onClick).toHaveBeenCalled();
    });
  });
});
