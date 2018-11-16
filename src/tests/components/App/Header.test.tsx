import * as React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import AppHeader from '../../../components/App/Header';

describe('AppHeader', () => {
  describe('snapshots', () => {
    it('renders correctly', () => {
      const tree = enzyme.shallow(<AppHeader />);
      expect(shallowToJson(tree)).toMatchSnapshot();
    });
  });
});
