import * as React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import CollectionBody from '../../../components/Collection/Body';
import testCards from '../../../common/mocks/collection';

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

  describe('integration', () => {
    it('renders Card components correctly', () => {
      const props = { ...defaultProps() };
      props.collection.cards = [...testCards].slice(0, 20);
      const tree = enzyme.mount(<CollectionBody {...props} />);
      const cards = tree.find('Card');
      expect(cards).toHaveLength(20);
    });
  });
});
