import * as React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { CardClassName, ICard } from '../../../common/models/cards.model';
import cards from '../../../common/mocks/collection';
import Collection, {
  composePagination,
  handleComponentShouldUpdate,
  setPagination,
} from '../../../components/Collection';

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

  describe('integration', () => {
    it('calls shouldComponentUpdate correctly', () => {
      const wrapper = enzyme.shallow(<Collection {...composeProps()} />);
      const instance = wrapper.instance();
      const nextProps = { ...composeProps() };
      const result = instance.shouldComponentUpdate!(nextProps, composeProps(), null);
      expect(result).toBe(false);
    });
  });

  describe('helpers', () => {
    it('handles component should update correctly with same card collection', () => {
      const props = composeProps();
      const nextProps = { ...props };
      handleComponentShouldUpdate(nextProps, props);
      expect(props.setPagination).not.toHaveBeenCalled();
    });

    it('handles component should update correctly with different card collection', () => {
      const props = composeProps();
      const nextProps = {
        ...composeProps(),
        collection: {
          cards: [...cards].slice(50, 99) as ICard[],
        },
      };
      handleComponentShouldUpdate(nextProps, props);
      expect(props.setPagination).toHaveBeenCalled();
    });

    it('handles component should update with different collection sizes', () => {
      const props = composeProps();
      const nextProps = {
        ...composeProps(),
        collection: {
          cards: [...cards].slice(50, 74) as ICard[],
        },
      };
      handleComponentShouldUpdate(nextProps, props);
      expect(props.setPagination).toHaveBeenCalled();
    });

    it('composes a pagination object correctly', () => {
      const pagination = composePagination({
        cards: [...cards].slice(0, 9) as ICard[],
      });
      expect(pagination).toMatchSnapshot();
    });

    it('sets pagination correctly', () => {
      const set = jest.fn();
      setPagination({
        cards: [...cards].slice(0, 9) as ICard[],
      })(set);
      expect(set).toHaveBeenCalledWith(composePagination({
        cards: [...cards].slice(0, 9) as ICard[],
      }));
    });
  });
});
