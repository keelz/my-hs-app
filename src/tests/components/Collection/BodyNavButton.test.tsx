import * as React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { BlockOrientation } from '../../../common/models/app.model';
import BodyNavButton, {
  composeAlignmentClassname,
  composeIconClassname,
  composeIconContainerClassname,
} from '../../../components/Collection/BodyNavButton';

const defaultProps = Object.freeze({
  active: false,
  align: BlockOrientation.LEFT,
  onClick: jest.fn(),
});

describe('Collect BodyNavButton', () => {
  describe('snapshots', () => {
    it('renders with orientation LEFT correctly', () => {
      const tree = enzyme.shallow(<BodyNavButton {...defaultProps} />);
      expect(shallowToJson(tree)).toMatchSnapshot();
    });

    it('renders with orientation RIGHT correctly', () => {
      const props = { ...defaultProps };
      props.align = BlockOrientation.RIGHT;
      const tree = enzyme.shallow(<BodyNavButton {...props} />);
      expect(shallowToJson(tree)).toMatchSnapshot();
    });
  });

  describe('integration', () => {
    it('handles onClick event correctly', () => {
      const tree = enzyme.mount(<BodyNavButton {...defaultProps} />);
      tree.simulate('click');
      expect(defaultProps.onClick).toHaveBeenCalled();
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

    it('composes icon container classname correctly when not active', () => {
      const test = composeIconContainerClassname({
        ...defaultProps,
        active: false,
      });
      expect(test).toMatchSnapshot();
    });

    it('composes icon container classname correctly when active', () => {
      const test = composeIconContainerClassname({
        ...defaultProps,
        active: true,
      });
      expect(test).toMatchSnapshot();
    });

    it('composes icon classname correctly for LEFT alignment', () => {
      const test = composeIconClassname(defaultProps);
      expect(test).toMatchSnapshot();
    });

    it('composes icon classname correctly for RIGHT alignment', () => {
      const props = { ...defaultProps, align: BlockOrientation.RIGHT };
      const test = composeIconClassname(props);
      expect(test).toMatchSnapshot();
    });
  });
});
