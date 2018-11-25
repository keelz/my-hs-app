import { connect } from 'react-redux';
import CollectionBody from '../../../components/Collection/Body';
import { IRootState } from '../../Types';
import { cardsSetPaginationAction } from '../../reducers/Cards';

const mapStateToProps = (state: IRootState) => ({
  pagination: state.Cards.pagination,
});

const mapDispatchToProps = {
  setPagination: cardsSetPaginationAction,
};

const ConnectedCollectionBody = connect(mapStateToProps, mapDispatchToProps)(CollectionBody);

export default ConnectedCollectionBody;
