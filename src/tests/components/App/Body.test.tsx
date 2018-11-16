import * as React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import AppBody from '../../../components/App/Body';

describe('AppBody', () => {
  describe('snapshots', () => {
    it('renders correctly', () => {
      const tree = enzyme.shallow(<AppBody />);
      expect(shallowToJson(tree)).toMatchSnapshot();
    });
  });
});
