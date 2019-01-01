import * as React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import APP from '../../../common/constants/app';
import PlayStyle from '../../../components/Collection/PlayStyle';
import { PLAY_STYLE } from '../../../redux/Types';

const { FILTERS } = APP.COLLECTION;

const defaultProps = Object.freeze({
  filters: {
    [FILTERS.PLAY_STYLE]: PLAY_STYLE.STANDARD,
  },
  setFilter: jest.fn(),
});

describe('Collection/PlayStyle', () => {
  describe('snapshots', () => {
    it('renders without crashing', () => {
      const wrapper = enzyme.shallow(<PlayStyle {...defaultProps} />);
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('integration', () => {
    it(`handles onClick event correctly with ${PLAY_STYLE.STANDARD} play style`, () => {
      const props = {
        ...defaultProps,
        setFilter: jest.fn(),
      };
      const wrapper = enzyme.mount(<PlayStyle {...props} />);
      const img = wrapper.find('img');
      img.simulate('click');
      expect(props.setFilter).toHaveBeenCalledWith(
        FILTERS.PLAY_STYLE,
        PLAY_STYLE.WILD
      );
    });

    it(`handles onClick event correctly with ${PLAY_STYLE.WILD} play style`, () => {
      const props = {
        ...defaultProps,
        filters: {
          ...defaultProps.filters,
          [FILTERS.PLAY_STYLE]: PLAY_STYLE.WILD,
        },
        setFilter: jest.fn(),
      };
      const wrapper = enzyme.mount(<PlayStyle {...props} />);
      const img = wrapper.find('img');
      img.simulate('click');
      expect(props.setFilter).toHaveBeenCalledWith(
        FILTERS.PLAY_STYLE,
        PLAY_STYLE.STANDARD
      );
    });
  });
});
