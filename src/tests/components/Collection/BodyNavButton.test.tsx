import * as React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { BlockOrientation } from '../../../common/models/app.model';
import BodyNavButton, {
  composeAlignmentClassname,
  composeIconClassname,
  composeIconContainerClassname,
} from '../../../components/Collection/BodyNavButton';

describe('Collect BodyNavButton', () => {
  describe('snapshots', () => {
    it('renders with orientation LEFT correctly', () => {
      const tree = enzyme.shallow(<BodyNavButton align={BlockOrientation.LEFT} />);
      expect(shallowToJson(tree)).toMatchSnapshot();
    });

    it('renders with orientation RIGHT correctly', () => {
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

  describe('helpers', () => {
    it('composes alignment classnames correctly for LEFT alignment', () => {
      const test = composeAlignmentClassname(BlockOrientation.LEFT);
      expect(test).toMatchSnapshot();
    });

    it('composes alignment classnames correctly for RIGHT alignment', () => {
      const test = composeAlignmentClassname(BlockOrientation.RIGHT);
      expect(test).toMatchSnapshot();
    });

    it('composes icon container classname correctly', () => {
      const test = composeIconContainerClassname();
      expect(test).toMatchSnapshot();
    });

    it('composes icon classname correctly for LEFT alignment', () => {
      const test = composeIconClassname(BlockOrientation.LEFT);
      expect(test).toMatchSnapshot();
    });

    it('composes icon classname correctly for RIGHT alignment', () => {
      const test = composeIconClassname(BlockOrientation.RIGHT);
      expect(test).toMatchSnapshot();
    });
  });
});
