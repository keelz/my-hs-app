import * as React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Collection from '../../../components/Collection';

describe('Collection', () => {
  describe('snapshots', () => {
    it('renders without crashing', () => {
      const tree = enzyme.shallow(<Collection />);
      expect(shallowToJson(tree)).toMatchSnapshot();
    });
  });
});
