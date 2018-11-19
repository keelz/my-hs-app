import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Cards from '../../../components/Cards';
import { RootState } from '../..//Types';
import { Card } from '../../reducers/Cards';

const getCards = (state: RootState) => state.Cards.data;

const getActiveClassName = (state: RootState) => state.Cards.activeClassName;

const cardsSelector = createSelector(
  [getCards, getActiveClassName],
  (cards: Card[], activeClassName) =>
    cards
      .filter(c => c.cardClass === activeClassName)
      .sort((a, b) => a.name < b.name ? - 1 : 0)
);

const mapStateToProps = (state: RootState) => ({
  activeCardClassName: getActiveClassName(state),
  cards: cardsSelector(state),
});

const ConnectedCards = connect(mapStateToProps)(Cards);

export default ConnectedCards;
