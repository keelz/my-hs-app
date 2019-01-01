import * as React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import AppHeader from '../../../components/App/Header';

const defaultProps = Object.freeze({
  className: 'test-classname',
});

describe('App/Header', () => {
  describe('snapshots', () => {
    it('renders without crashing', () => {
      const wrapper = enzyme.shallow(<AppHeader {...defaultProps} />);
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
  });
});
