import * as React from 'react';
import { Link } from 'react-router-dom';

interface AppNavBarProps {}

const AppNavBar: React.SFC<AppNavBarProps> = props =>
  <React.Fragment>
    <Link to="/" style={{ paddingRight: 10 }}>Home</Link>
    <Link to="/test">Test</Link>
  </React.Fragment>;

export default AppNavBar;
