import { connect } from 'react-redux';
import HSJSON from '../../../common/constants/hsJson';
import ManaBar from '../../../components/Collection/ManaBar';
import { IRootState } from '../../Types';
import { cardsSetFilterAction } from '../../reducers/Cards';

const mapStateToProps = (state: IRootState) => ({
  activeGem: parseInt(state.Cards.filters[HSJSON.RESPONSE_PARAMS.COST], 10),
});

const mapDispatchToProps = {
  setFilter: cardsSetFilterAction,
};

const ConnectedManaBar = connect(mapStateToProps, mapDispatchToProps)(ManaBar);

export default ConnectedManaBar;
