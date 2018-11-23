import * as React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import CollectionBody from '../../../components/Collection/Body';

const defaultProps = () => Object.freeze({
  collection: {
    cards: Array(0),
  },
});

describe('Collection Body', () => {
  describe('snapshots', () => {
    it('renders without crashing', () => {
      const tree = enzyme.shallow(<CollectionBody {...defaultProps()} />);
      expect(shallowToJson(tree)).toMatchSnapshot();
    });
  });
});
