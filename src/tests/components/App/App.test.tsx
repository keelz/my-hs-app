import * as React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Index from '../../../components/App';
import { App } from '../../../components/App/App';

describe('App', () => {
  describe('snapshots', () => {
    it('renders App component correctly', () => {
      const tree = enzyme.shallow(<App />);
      expect(shallowToJson(tree)).toMatchSnapshot();
    });

    it('renders index component correctly', () => {
      const tree = enzyme.shallow(<Index />);
      expect(shallowToJson(tree)).toMatchSnapshot();
    });
  });
});
