import * as React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import CardClassNavBar from '../../../components/App/CardClassNavBar';

describe('AppNavBar', () => {
  describe('snapshots', () => {
    it('renders correctly', () => {
      const tree = enzyme.shallow(<CardClassNavBar cardClassNames={[]} />);
      expect(shallowToJson(tree)).toMatchSnapshot();
    });
  });
});
