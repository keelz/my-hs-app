import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppBody from './Body';
import AppFooter from './Footer';
import AppHeader from '../../redux/containers/App/Header';
import './App.css';

// implementation props.
interface AppProps {}

// redux props.
interface AppStateProps {}

// component props.
type Props = AppProps & AppStateProps;

const App: React.SFC<Props> = props =>
  <Router>
    <React.Fragment>
      <AppHeader />
      <AppBody />
      <AppFooter />
    </React.Fragment>
  </Router>;

export default App;
