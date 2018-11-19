import * as React from 'react';
import CardClassNavBar from '../../redux/containers/App/CardClassNavBar';

// implementation props.
interface AppHeaderProps {}

// redux props.
interface AppHeaderStateProps {}

// component props.
type Props = AppHeaderProps & AppHeaderStateProps;

const style = {
  display: 'flex',
  justifyContent: 'center',
};

const AppHeader: React.SFC<Props> = props =>
  <header className="App-header" style={style}>
    <CardClassNavBar />
  </header>;

export default AppHeader;
