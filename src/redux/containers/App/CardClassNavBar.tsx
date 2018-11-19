import { connect } from 'react-redux';
import CardClassNavBar from '../../../components/App/CardClassNavBar';
import { RootState } from 'src/redux/Types';
import { cardsSetActiveClassNameAction } from 'src/redux/reducers/Cards';

const mapStateToProps = (state: RootState) => ({
  cardClassNames: state.Cards.classNames,
});

const mapDispatchToProps = {
  setActiveClassName: cardsSetActiveClassNameAction,
};

const ConnectedCardClassNavBar = connect(mapStateToProps, mapDispatchToProps)(CardClassNavBar);

export default ConnectedCardClassNavBar;
