import { connect } from 'react-redux';
import PlayStyle from '../../../components/Collection/PlayStyle';
import { IRootState } from '../../Types';
import { collectionSetFilterAction } from '../../reducers/Collection';

const mapStateToProps = (state: IRootState) => ({
  filters: state.Collection.filters,
});

const mapDispatchToProps = {
  setFilter: collectionSetFilterAction,
};

const ConnectedPlayStyle = connect(mapStateToProps, mapDispatchToProps)(PlayStyle);

export default ConnectedPlayStyle;
