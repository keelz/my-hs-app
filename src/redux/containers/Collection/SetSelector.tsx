import { connect } from 'react-redux';
import { IRootState } from '../../Types';
import { collectionSetFilterAction } from '../../reducers/Collection';
import { selectActiveSets } from '../../selectors/Collection';
import SetSelector from '../../../components/Collection/SetSelector';

const mapStateToProps = (state: IRootState) => ({
  sets: selectActiveSets(state),
});

const mapDispatchToProps = {
  collectionSetFilterAction,
};

const ConnectedSetSelector = connect(mapStateToProps, mapDispatchToProps)(SetSelector);

export default ConnectedSetSelector;
