import { connect } from 'react-redux';
import { IRootState } from '../..//Types';
import Header from '../../../components/App/Header';

const mapStateToProps = (state: IRootState) => ({
  cardClassNames: state.Cards.classNames,
});

const ConnectedHeader = connect(mapStateToProps)(Header);

export default ConnectedHeader;
