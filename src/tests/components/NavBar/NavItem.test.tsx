import * as React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import NavItem from '../../../components/NavBar/NavItem';

describe('NavBar NavItem', () => {
  describe('snapshots', () => {
    it('renders without crashing', () => {
      const tree = enzyme.shallow(<NavItem />);
      expect(shallowToJson(tree)).toMatchSnapshot();
    });

    it('renders with children correctly', () => {
      const Component = () =>
        <NavItem><div>test</div></NavItem>;
      const tree = enzyme.shallow(<Component />);
      expect(shallowToJson(tree)).toMatchSnapshot();
    });
  });

  describe('integration', () => {
    it('renders with a render prop correctly', () => {
      const render = jest.fn();
      enzyme.shallow(<NavItem render={render} />);
      expect(render).toHaveBeenCalled();
    });
  });
});
