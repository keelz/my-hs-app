import * as React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import CardDetail from '../../../components/Collection/CardDetail';
import { CardClassName } from '../../../common/models/cards.model';

const defaultProps = Object.freeze({
  card: {
    cardClass: CardClassName.DRUID,
    cost: 7,
    flavor: 'test-card-flavor',
    id: 'test-card-id',
    name: 'test-card-name',
    text: 'test-card-text',
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
