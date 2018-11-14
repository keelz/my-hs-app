import * as React from 'react';
import logo from '../../common/assets/img/logo.svg';
import './App.css';

export const App: React.SFC = () =>
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro"></p>
  </div>;

export default App;
