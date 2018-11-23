import { connect } from 'react-redux';
import { IRootState } from '../../Types';
import { cardsSetActiveClassNameAction } from '../../reducers/Cards';
import Header from '../../../components/App/Header';
import {
  selectCardClassNames,
  selectActiveCardClassName
} from '../../selectors/cards';

const mapStateToProps = (state: IRootState) => ({
  activeClassName: selectActiveCardClassName(state),
  cardClassNames: selectCardClassNames(state),
});

const mapDispatchToProps = {
  setActiveCardClassName: cardsSetActiveClassNameAction,
};

const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);

export default ConnectedHeader;
