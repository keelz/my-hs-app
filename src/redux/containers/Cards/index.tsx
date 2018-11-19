import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { IRootState } from '../../Types';
import { ICard } from '../../../common/models/Card';
import Cards from '../../../components/Cards';

const getCards = (state: IRootState) => state.Cards.data;

const getActiveClassName = (state: IRootState) => state.Cards.activeClassName;

const cardsSelector = createSelector(
  [getCards, getActiveClassName],
  (cards: ICard[], activeClassName: string) =>
    cards
      // filter by active class name
      .filter(c => c.cardClass === activeClassName)
      // sort by cost
      .sort((a, b) => a.cost - b.cost)
      // sort by name
      .sort((a, b) => a.cost === b.cost
        ? a.name < b.name
          ? -1
          : 0
        : 0)
);

const mapStateToProps = (state: IRootState) => ({
  activeCardClassName: getActiveClassName(state),
  cards: cardsSelector(state),
});

const ConnectedCards = connect(mapStateToProps)(Cards);

export default ConnectedCards;
