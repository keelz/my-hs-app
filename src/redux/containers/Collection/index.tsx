import { connect } from 'react-redux';
import { IRootState } from '../../Types';
import Collection, { ICollectionStateProps } from '../../../components/Collection';
import { CardClassName } from '../../../common/models/cards.model';
import {
  selectActiveCardClassName,
  selectCardsWithFilters
} from '../../selectors/cards';

const mapStateToProps = (state: IRootState): ICollectionStateProps => ({
  activeCardClassName: selectActiveCardClassName(state) as CardClassName,
  collection: {
    cards: selectCardsWithFilters(state),
  },
});

const ConnectedCollection = connect(mapStateToProps)(Collection);

export default ConnectedCollection;
