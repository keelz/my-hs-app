import * as React from 'react';
import NavBar from './NavBar';

// implementation props.
interface AppHeaderProps {}

// redux props.
interface AppHeaderStateProps {}

// component props.
type Props = AppHeaderProps & AppHeaderStateProps;

const AppHeader: React.SFC<Props> = props =>
  <header className="App-header">
    <NavBar />
  </header>;

export default AppHeader;
