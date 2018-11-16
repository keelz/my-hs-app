import * as React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Placeholder from '../../components/Placeholder';

describe('Placeholder', () => {
  describe('snapshots', () => {
    it('renders correctly', () => {
      const tree = enzyme.shallow(<Placeholder text="test" />);
      expect(shallowToJson(tree)).toMatchSnapshot();
    });
  });
});
