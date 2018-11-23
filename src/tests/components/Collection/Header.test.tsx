import * as React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import CollectionHeader from '../../../components/Collection/Header';

describe('Collection Header', () => {
  describe('snapshots', () => {
    it('renders without crashing', () => {
      const tree = enzyme.shallow(<CollectionHeader />);
      expect(shallowToJson(tree)).toMatchSnapshot();
    });
  });
});
