import * as React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import CardClassNavBar from '../../../components/CardClassNavBar';

const props = () => {
  const cardClassNames: string[] = [];
  const setActiveClassName = jest.fn();

  return { cardClassNames, setActiveClassName };
};

describe('AppNavBar', () => {
  describe('snapshots', () => {
    it('renders correctly', () => {
      const tree = enzyme.shallow(<CardClassNavBar { ...props() } />);
      expect(shallowToJson(tree)).toMatchSnapshot();
    });
  });
});
