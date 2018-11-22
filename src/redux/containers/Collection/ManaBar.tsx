import { connect } from 'react-redux';
import ManaBar from '../../../components/Collection/ManaBar';
import { IRootState } from '../../Types';
import { cardsSetFilterAction } from '../../reducers/Cards';

const mapStateToProps = (state: IRootState) => ({});

const mapDispatchToProps = {
  setFilter: cardsSetFilterAction,
};

const ConnectedManaBar = connect(mapStateToProps, mapDispatchToProps)(ManaBar);

export default ConnectedManaBar;
