import * as React from 'react';
import logo from '../../common/assets/img/logo.svg';
import './App.css';

export const App: React.SFC = () =>
  <div>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <section className="App-body">
      <p>app content placeholder</p>
    </section>
    <section className="App-footer"></section>
  </div>;

export default App;
