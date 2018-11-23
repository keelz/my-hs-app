import * as React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ManaGem from '../../components/ManaGem';

describe('ManaGem', () => {
  describe('snapshots', () => {
    it('renders without crashing', () => {
      const tree = enzyme.shallow(<ManaGem cost={2} />);
      expect(shallowToJson(tree)).toMatchSnapshot();
    });
  });
});
