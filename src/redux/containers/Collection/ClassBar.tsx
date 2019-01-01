import { connect } from 'react-redux';
import { IRootState } from '../../Types';
import { collectionSetActiveClassNameAction } from '../../reducers/Collection';
import { selectCardClassNames } from '../../selectors/Collection';
import ClassBar from '../../../components/Collection/ClassBar';

const mapStateToProps = (state: IRootState) => ({
  activeClassName: state.Collection.activeClassName,
  cardClassNames: selectCardClassNames(state),
});

const mapDispatchToProps = {
  setActiveCardClassName: collectionSetActiveClassNameAction,
};

const ConnectedClassBar = connect(mapStateToProps, mapDispatchToProps)(ClassBar);

export default ConnectedClassBar;
