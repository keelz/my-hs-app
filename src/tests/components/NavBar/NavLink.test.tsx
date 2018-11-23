import * as React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import NavLink from '../../../components/NavBar/NavLink';

describe('NavBar NavLink', () => {
  describe('snapshots', () => {
    it('renders without crashing', () => {
      const tree = enzyme.shallow(<NavLink />);
      expect(shallowToJson(tree)).toMatchSnapshot();
    });

    it('renders with children correctly', () => {
      const Component = () =>
        <NavLink><div>test</div></NavLink>;
      const tree = enzyme.shallow(<Component />);
      expect(shallowToJson(tree)).toMatchSnapshot();
    });
  });

  describe('integration', () => {
    it('renders with a render prop correctly', () => {
      const render = jest.fn();
      enzyme.shallow(<NavLink render={render} />);
      expect(render).toHaveBeenCalled();
    });
  });
});
