import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppBody from './Body';
import AppFooter from './Footer';
import './App.css';

const App: React.SFC = () =>
  <Router>
    <React.Fragment>
      <AppBody />
      <AppFooter />
    </React.Fragment>
  </Router>;

export default App;
