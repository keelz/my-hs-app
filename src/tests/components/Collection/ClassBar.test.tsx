import * as React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ClassBar from '../../../components/Collection/ClassBar';

const defaultProps = Object.freeze({
  activeClassName: 'DRUID',
  cardClassNames: ['DRUID', 'HUNTER', 'MAGE'],
  setActiveCardClassName: jest.fn(),
});

describe('Collection/ClassBar', () => {
  describe('snapshots', () => {
    it('renders without crashing', () => {
      const wrapper = enzyme.shallow(<ClassBar {...defaultProps} />);
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
  });
});
