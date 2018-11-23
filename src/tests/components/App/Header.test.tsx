import * as React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import AppHeader from '../../../components/App/Header';

const defaultProps = Object.freeze({
  cardClassNames: Array(0),
  setActiveCardClassName: jest.fn(),
});

describe('AppHeader', () => {
  describe('snapshots', () => {
    it('renders correctly', () => {
      const tree = enzyme.shallow(<AppHeader {...defaultProps} />);
      expect(shallowToJson(tree)).toMatchSnapshot();
    });
  });

  describe('integration', () => {
    it('renders NavLink components correctly', () => {
      const props = { ...defaultProps };
      props.cardClassNames = ['one', 'two', 'three'];
      const tree = enzyme.mount(<AppHeader {...props} />);
      const navLinks = tree.find('NavItem');
      expect(navLinks).toHaveLength(3);
    });

    it('handles nav link on click event correctly', () => {
      const props = { ...defaultProps };
      props.cardClassNames = ['one'];
      const tree = enzyme.mount(<AppHeader {...props} />);
      const navLink = tree.find('NavItem').first();
      const button = navLink.find('button');
      button.simulate('click');
      expect(props.setActiveCardClassName).toHaveBeenCalled();
    });
  });
});
