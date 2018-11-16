import * as React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import AppFooter from '../../../components/App/Footer';

describe('AppFooter', () => {
  describe('snapshots', () => {
    it('renders correctly', () => {
      const tree = enzyme.shallow(<AppFooter />);
      expect(shallowToJson(tree)).toMatchSnapshot();
    });
  });
});
