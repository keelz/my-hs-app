import * as React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { NavBar } from '../../../components/NavBar';

const composeProps = () => ({
  id: 'test',
  targets: [{
    path: '/test',
    text: 'test',
  }],
});

describe('NavBar', () => {
  describe('snapshots', () => {
    it('renders without crashing', () => {
      const tree = enzyme.shallow(<NavBar {...composeProps()} />);
      expect(shallowToJson(tree)).toMatchSnapshot();
    });

    it('renders correctly without text', () => {
      const props = { ...composeProps() };
      props.targets = props.targets.map(t => {
        delete t.text;
        return t;
      });
      const tree = enzyme.shallow(<NavBar {...props} />);
      expect(shallowToJson(tree)).toMatchSnapshot();
    });
  });
});
