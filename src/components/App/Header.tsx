import * as React from 'react';
import NavBar from '../NavBar';
import { composeTargets } from '../../common/utils/navBar';

// redux props.
interface IAppHeaderStateProps {
  cardClassNames: string[];
  setActiveCardClassName: (cardClassName: string) => any;
}

const style = {
  display: 'flex',
  justifyContent: 'center',
};

const AppHeader: React.SFC<IAppHeaderStateProps> = props =>
  <header className="App-header" style={style}>
    <NavBar
      id="card-class-names-nav-bar"
      targets={composeTargets(
        props.cardClassNames,
        props.setActiveCardClassName
      )} />
  </header>;

export default AppHeader;
