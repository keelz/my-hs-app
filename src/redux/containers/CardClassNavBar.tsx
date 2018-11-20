import { connect } from 'react-redux';
import CardClassNavBar from '../../components/CardClassNavBar';
import { IRootState } from '../../redux/Types';
import { cardsSetActiveClassNameAction } from '../../redux/reducers/Cards';

const mapStateToProps = (state: IRootState) => ({
  cardClassNames: state.Cards.classNames,
});

const mapDispatchToProps = {
  setActiveClassName: cardsSetActiveClassNameAction,
};

const ConnectedCardClassNavBar = connect(mapStateToProps, mapDispatchToProps)(CardClassNavBar);

export default ConnectedCardClassNavBar;
