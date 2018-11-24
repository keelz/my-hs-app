import * as React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Card from '../../components/Card';
import { CardLocale, CardResolution, CardExt } from '../../common/models/cards.model';

const composeProps = () => ({
  id: 'test',
  ext: CardExt.PNG,
  locale: CardLocale.EN,
  resolution: CardResolution.LARGE,
});

describe('Card', () => {
  describe('snapshots', () => {
    it('renders without crashing', () => {
      const tree = enzyme.shallow(<Card {...composeProps()} />);
      expect(shallowToJson(tree)).toMatchSnapshot();
    });
  });
});
