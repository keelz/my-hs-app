import * as React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import LoadingAnimation from '../../components/LoadingAnimation';

describe('LoadingAnimation', () => {
  describe('snapshots', () => {
    it('renders correctly', () => {
      const tree = enzyme.shallow(<LoadingAnimation />);
      expect(shallowToJson(tree)).toMatchSnapshot();
    });
  });
});
