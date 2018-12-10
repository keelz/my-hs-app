import * as React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import CardDetail from '../../../components/Collection/CardDetail';
import { CardClassName, CardSet, CardType, Race, Rarity } from '../../../common/models/Cards.model';

const defaultProps = Object.freeze({
  card: {
    artist: 'test-artist',
    cardClass: CardClassName.DRUID,
    collectible: true,
    cost: 7,
    dbfId: 123,
    flavor: 'test-card-flavor',
    id: 'test-card-id',
    name: 'test-card-name',
    race: Race.BLOODELF,
    rarity: Rarity.EPIC,
    set: CardSet.BOOMSDAY,
    text: 'test-card-text',
    type: CardType.MINION,
  },
});

describe('Collecttion/CardDetail', () => {
  describe('snapshots', () => {
    it('renders without crashing', () => {
      const tree = enzyme.shallow(<CardDetail {...defaultProps} />);
      expect(shallowToJson(tree)).toMatchSnapshot();
    });
  });
});
