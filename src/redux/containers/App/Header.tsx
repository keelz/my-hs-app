import { connect } from 'react-redux';
import { RootState } from '../..//Types';
import Header from '../../../components/App/Header';

const mapStateToProps = (state: RootState) => ({
  cardClassNames: state.Cards.classNames,
});

const ConnectedHeader = connect(mapStateToProps)(Header);

export default ConnectedHeader;
