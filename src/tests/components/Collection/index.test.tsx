import * as React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { CardClassName, ICard } from '../../../common/models/Cards.model';
import cards from '../../../common/mocks/collection';
import Collection from '../../../components/Collection';

const composeProps = () => ({
  activeCardClassName: CardClassName.DRUID,
  collection: {
    cards: [...cards].slice(0, 49) as ICard[],
  },
  setPagination: jest.fn(),
});

describe('Collection', () => {
  describe('snapshots', () => {
    it('renders without crashing', () => {
      const tree = enzyme.shallow(<Collection {...composeProps()} />);
      expect(shallowToJson(tree)).toMatchSnapshot();
    });
  });
});
