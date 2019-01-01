import * as React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { ICard } from '../../../common/models/Cards.model';
import testCards from '../../../common/mocks/collection';
import CollectionBody, {
  composeCollection, composeToggleModal,
} from '../../../components/Collection/Body';
import { MODAL_STATE } from '../../../redux/Types';

const defaultProps = () => Object.freeze({
  activeCard: undefined,
  collection: {
    cards: Array(0),
  },
  modalState: MODAL_STATE.CLOSED,
  pagination: {
    currentPage: 0,
    itemsPerPage: 10,
    pages: 1,
    total: 50,
  },
  setActiveCard: jest.fn(),
  setModalState: jest.fn(),
  setPagination: jest.fn(),
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
      expect(cards).toHaveLength(10);
    });

    it('handles left nav button click event correctly', () => {
      const props = { ...defaultProps() };
      const tree = enzyme.mount(<CollectionBody {...props} />);
      const left = tree.find('.Collection-align-left').first();
      left.simulate('click');
      expect(props.setPagination).toHaveBeenCalled();
    });

    it('handles right nav button click event correctly', () => {
      const props = { ...defaultProps() };
      const tree = enzyme.mount(<CollectionBody {...props} />);
      const right = tree.find('.Collection-align-right').first();
      right.simulate('click');
      expect(props.setPagination).toHaveBeenCalled();
    });

    it('toggles modal open correctly', () => {
      const props = {
        ...defaultProps(),
        collection: {
          cards: [...testCards].slice(0, 49) as ICard[],
        },
      };
      const wrapper = enzyme.mount(<CollectionBody {...props} />);
      const card = wrapper.find('Card').first();
      expect(card).toHaveLength(1);
      card.simulate('click');
      expect(props.setActiveCard).toHaveBeenCalledWith(props.collection.cards[0]);
    });
  });

  describe('helpers', () => {
    it('composes collection correctly', () => {
      const pagination = {
        currentPage: 0,
        itemsPerPage: 10,
        pages: 5,
        total: 50,
      };
      const result = composeCollection(
        [...testCards].slice(0, 49) as ICard[],
        pagination
      );
      expect(result).toHaveLength(10);
      expect(result).toMatchSnapshot();
    });

    it('composes toggle modal correctly', () => {
      const props = {
        ...defaultProps(),
        setActiveCard: jest.fn(),
        setModalState: jest.fn(),
      };
      // test toggle from closed
      composeToggleModal(props)(testCards[0] as ICard)();
      props.modalState = MODAL_STATE.OPEN;
      // test toggle from open
      composeToggleModal(props)(testCards[0] as ICard)();
      expect(props.setActiveCard).toHaveBeenCalledWith(testCards[0]);
      expect(props.setModalState).toHaveBeenCalledWith(MODAL_STATE.OPEN);
      expect(props.setModalState).toHaveBeenCalledWith(MODAL_STATE.CLOSED);
    });
  });
});
