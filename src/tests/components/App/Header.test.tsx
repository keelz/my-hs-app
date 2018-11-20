import * as React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import AppHeader from '../../../components/App/Header';

const props = {
  cardClassNames: [],
  setActiveCardClassName: jest.fn(),
};

describe('AppHeader', () => {
  describe('snapshots', () => {
    it('renders correctly', () => {
      const tree = enzyme.shallow(<AppHeader {...props} />);
      expect(shallowToJson(tree)).toMatchSnapshot();
    });
  });
});
