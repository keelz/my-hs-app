import * as React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Index from '../../../components/App';
import { App } from '../../../components/App/App';

const defaultState = {
  loaded: true,
  appDidLoadAction: jest.fn(),
};

describe('App', () => {
  describe('snapshots', () => {
    it('renders App component correctly', () => {
      const tree = enzyme.shallow(<App />);
      expect(shallowToJson(tree)).toMatchSnapshot();
    });

    it('renders index component correctly when loaded is true', () => {
      const tree = enzyme.shallow(<Index {...defaultState} />);
      expect(shallowToJson(tree)).toMatchSnapshot();
    });

    it('renders index component correctly when loaded is false', () => {
      const tree = enzyme.shallow(<Index {...{ ...defaultState, loaded: false }} />);
      expect(shallowToJson(tree)).toMatchSnapshot();
    });
  });
});
