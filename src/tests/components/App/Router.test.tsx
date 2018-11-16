import * as React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import AppRouter from '../../../components/App/Router';

describe('AppRouter', () => {
  describe('snapshots', () => {
    it('renders correctly', () => {
      const tree = enzyme.shallow(<AppRouter />);
      expect(shallowToJson(tree)).toMatchSnapshot();
    });
  });
});
