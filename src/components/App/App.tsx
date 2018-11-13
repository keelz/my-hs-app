import * as React from 'react';
import logo from '../../common/assets/img/logo.svg';
import './App.css';

export const App: React.SFC = () =>
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.tsx</code> and save to reload.
    </p>
  </div>;

export default App;
