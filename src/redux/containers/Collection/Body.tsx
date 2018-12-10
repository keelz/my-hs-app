import { connect } from 'react-redux';
import CollectionBody from '../../../components/Collection/Body';
import { IRootState } from '../../Types';
import {
  collectionSetActiveCardAction,
  collectionSetModalAction,
  collectionSetPaginationAction,
} from '../../reducers/Collection';

const mapStateToProps = (state: IRootState) => ({
  activeCard: state.Collection.activeCard,
  modalState: state.Collection.modal,
  pagination: state.Collection.pagination,
});

const mapDispatchToProps = {
  setActiveCard: collectionSetActiveCardAction,
  setModalState: collectionSetModalAction,
  setPagination: collectionSetPaginationAction,
};

const ConnectedCollectionBody = connect(mapStateToProps, mapDispatchToProps)(CollectionBody);

export default ConnectedCollectionBody;
