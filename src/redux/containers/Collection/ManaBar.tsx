import { connect } from 'react-redux';
import HSJSON from '../../../common/constants/hsJson';
import ManaBar from '../../../components/Collection/ManaBar';
import { IRootState } from '../../Types';
import { collectionSetFilterAction } from '../../reducers/Collection';

const mapStateToProps = (state: IRootState) => ({
  activeGem: parseInt(state.Collection.filters[HSJSON.RESPONSE_PARAMS.COST], 10),
});

const mapDispatchToProps = {
  setFilter: collectionSetFilterAction,
};

const ConnectedManaBar = connect(mapStateToProps, mapDispatchToProps)(ManaBar);

export default ConnectedManaBar;
