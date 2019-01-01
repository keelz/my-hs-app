import * as React from 'react';
import * as enzyme from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import ClassBar from '../../../components/Collection/ClassBar';

const defaultProps = Object.freeze({
  activeClassName: 'DRUID',
  cardClassNames: ['DRUID', 'HUNTER', 'MAGE'],
  setActiveCardClassName: jest.fn(),
});

describe('Collection/ClassBar', () => {
  describe('snapshots', () => {
    it('renders without crashing', () => {
      const wrapper = enzyme.render(<ClassBar {...defaultProps} />);
      expect(renderToJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('integration', () => {
    it('handles button click correctly', () => {
      const props = {
        ...defaultProps,
        setActiveCardClassName: jest.fn(),
      };
      const wrapper = enzyme.mount(<ClassBar {...props} />);
      const buttons = wrapper.find('button');
      buttons.at(1).simulate('click');
      expect(props.setActiveCardClassName).toHaveBeenCalledWith('HUNTER');
    });
  });
});
