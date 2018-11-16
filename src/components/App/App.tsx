import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppBody from './Body';
import AppFooter from './Footer';
import AppHeader from './Header';
import './App.css';

interface AppProps {}

const App: React.SFC<AppProps> = props =>
  <Router>
    <React.Fragment>
      <AppHeader />
      <AppBody />
      <AppFooter />
    </React.Fragment>
  </Router>;

export default App;
