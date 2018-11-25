import { connect } from 'react-redux';
import { IRootState } from '../../Types';
import { CardClassName } from '../../../common/models/cards.model';
import { cardsSetPaginationAction } from '../../reducers/Cards';
import {
  selectActiveCardClassName,
  selectCardsWithFilters
} from '../../selectors/cards';
import Collection from '../../../components/Collection';

const mapStateToProps = (state: IRootState) => ({
  activeCardClassName: selectActiveCardClassName(state) as CardClassName,
  collection: {
    cards: selectCardsWithFilters(state),
  },
});

const mapDispatchToProps = {
  setPagination: cardsSetPaginationAction,
};

const ConnectedCollection = connect(mapStateToProps, mapDispatchToProps)(Collection);

export default ConnectedCollection;
