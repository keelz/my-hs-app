import { connect } from 'react-redux';
import { RootState } from '../../Types';
import App from '../../../components/App';
import { appDidLoadAction } from '../../reducers/App';

const mapStateToProps = (state: RootState) => ({
  loaded: state.App.loaded,
});

const mapDispatchToProps = {
  appDidLoadAction,
};

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default connectedApp;
