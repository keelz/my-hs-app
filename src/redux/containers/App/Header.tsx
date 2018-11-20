import { connect } from 'react-redux';
import { IRootState } from '../../Types';
import { cardsSetActiveClassNameAction } from '../../reducers/Cards';
import { selectCardClassNames } from '../../selectors/cards';
import Header from '../../../components/App/Header';

const mapStateToProps = (state: IRootState) => ({
  cardClassNames: selectCardClassNames(state),
});

const mapDispatchToProps = {
  setActiveCardClassName: cardsSetActiveClassNameAction,
};

const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);

export default ConnectedHeader;
