import * as React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import CollectionFooter from '../../../components/Collection/Footer';

describe('Collection/Footer', () => {
  describe('snapshots', () => {
    it('renders without crashing', () => {
      const wrapper = enzyme.shallow(<CollectionFooter />);
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
  });
});
