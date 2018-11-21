import { connect } from 'react-redux';
import { IRootState } from '../../Types';
import Collection, { ICollectionStateProps } from '../../../components/Collection';
import { CardClassName } from '../../../common/models/Card';
import {
  selectActiveCardClassName,
  selectCardsForActiveClassName
} from '../../selectors/cards';

const mapStateToProps = (state: IRootState): ICollectionStateProps => ({
  activeCardClassName: selectActiveCardClassName(state) as CardClassName,
  collection: {
    cards: selectCardsForActiveClassName(state),
  },
});

const ConnectedCollection = connect(mapStateToProps)(Collection);

export default ConnectedCollection;
