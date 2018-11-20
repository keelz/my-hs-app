import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { composeCardClassNames } from '../../../common/utils/card';
import { IRootState } from '../../Types';
import { cardsSetActiveClassNameAction } from '../../reducers/Cards';
import Header from '../../../components/App/Header';

const getCards = (state: IRootState) => state.Cards.data;

const getCardClassNames = createSelector(
  [getCards],
  (cards) => composeCardClassNames(cards)
);

const mapStateToProps = (state: IRootState) => ({
  cardClassNames: getCardClassNames(state),
});

const mapDispatchToProps = {
  setActiveCardClassName: cardsSetActiveClassNameAction,
};

const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);

export default ConnectedHeader;
