import * as React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import PlayStyle from '../../../components/Collection/PlayStyle';

const defaultProps = Object.freeze({
  filters: {},
  setFilter: jest.fn(),
});

describe('Collection/PlayStyle', () => {
  describe('snapshots', () => {
    it('renders without crashing', () => {
      const wrapper = enzyme.shallow(<PlayStyle {...defaultProps} />);
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
  });
});
