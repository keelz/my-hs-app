import * as React from 'react';
import NavBar from './NavBar';

interface AppHeaderProps {}

const AppHeader: React.SFC<AppHeaderProps> = props =>
  <header className="App-header">
    <NavBar />
  </header>;

export default AppHeader;
