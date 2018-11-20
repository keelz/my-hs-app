import * as React from 'react';
import NavBar from '../NavBar';

// redux props.
interface IAppHeaderStateProps {
  cardClassNames: string[];
  setActiveCardClassName: (cardClassName: string) => any;
}

const style = {
  display: 'flex',
  justifyContent: 'center',
};

const composeTargets = (
  withCardClassNames: string[],
  action: (...args: any[]
) => any) => withCardClassNames.map(cn => ({
  action: () => action(cn),
  path: '/',
  text: cn,
}));

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
