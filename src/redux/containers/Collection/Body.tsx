import { connect } from 'react-redux';
import CollectionBody from '../../../components/Collection/Body';
import { IRootState } from '../../Types';
import { cardsSetPaginationAction } from '../../reducers/Cards';
import { setCollectionModalAction, setCollectionActiveCardAction } from '../../reducers/Collection';

const mapStateToProps = (state: IRootState) => ({
  activeCard: state.Collection.activeCard,
  modalState: state.Collection.modal,
  pagination: state.Cards.pagination,
});

const mapDispatchToProps = {
  setActiveCard: setCollectionActiveCardAction,
  setModalState: setCollectionModalAction,
  setPagination: cardsSetPaginationAction,
};

const ConnectedCollectionBody = connect(mapStateToProps, mapDispatchToProps)(CollectionBody);

export default ConnectedCollectionBody;
