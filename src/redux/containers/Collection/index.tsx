import { connect } from 'react-redux';
import { IRootState } from '../../Types';
import { CardClassName } from '../../../common/models/cards.model';
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

const ConnectedCollection = connect(mapStateToProps)(Collection);

export default ConnectedCollection;
