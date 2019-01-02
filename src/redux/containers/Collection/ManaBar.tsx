import { connect } from 'react-redux';
import APP from '../../../common/constants/app';
import ManaBar from '../../../components/Collection/ManaBar';
import { IRootState } from '../../Types';
import { collectionSetFilterAction } from '../../reducers/Collection';

const { FILTERS } = APP.COLLECTION;

const mapStateToProps = (state: IRootState) => ({
  activeGem: parseInt(state.Collection.filters[FILTERS.COST] as string, 10),
});

const mapDispatchToProps = {
  setFilter: collectionSetFilterAction,
};

const ConnectedManaBar = connect(mapStateToProps, mapDispatchToProps)(ManaBar);

export default ConnectedManaBar;
