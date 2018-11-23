import * as React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Collection from '../../../components/Collection';
import { CardClassName, ICard } from '../../../common/models/Card';
import cards from '../../../common/mocks/collection';

const composeProps = () => ({
  activeCardClassName: CardClassName.DRUID,
  collection: {
    cards: [...cards] as ICard[],
  },
});

describe('Collection', () => {
  describe('snapshots', () => {
    it('renders without crashing', () => {
      const tree = enzyme.shallow(<Collection {...composeProps()} />);
      expect(shallowToJson(tree)).toMatchSnapshot();
    });
  });
});