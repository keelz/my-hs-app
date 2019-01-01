import { connect } from 'react-redux';
import { IRootState } from '../../Types';
import { collectionSetFilterAction } from '../../reducers/Collection';
import { selectActiveSets } from '../../selectors/Collection';
import SetSelector from '../../../components/Collection/SetSelector';

const mapStateToProps = (state: IRootState) => ({
  collectionSetFilterAction,
  sets: selectActiveSets(state),
});

const ConnectedSetSelector = connect(mapStateToProps)(SetSelector);

export default ConnectedSetSelector;
