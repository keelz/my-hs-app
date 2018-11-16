import * as React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import AppNavBar from '../../../components/App/NavBar';

describe('AppNavBar', () => {
  describe('snapshots', () => {
    it('renders correctly', () => {
      const tree = enzyme.shallow(<AppNavBar />);
      expect(shallowToJson(tree)).toMatchSnapshot();
    });
  });
});
