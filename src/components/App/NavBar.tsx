import * as React from 'react';
import { Link } from 'react-router-dom';

// implementation props.
interface AppNavBarProps {}

// redux props.
interface AppNavBarStateProps {}

// component props.
type Props = AppNavBarProps & AppNavBarStateProps;

const AppNavBar: React.SFC<Props> = props =>
  <React.Fragment>
    <Link to="/" style={{ paddingRight: 10 }}>Home</Link>
    <Link to="/test">Test</Link>
  </React.Fragment>;

export default AppNavBar;
