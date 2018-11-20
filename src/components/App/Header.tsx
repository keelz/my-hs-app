import * as React from 'react';
import NavBar from '../NavBar';

// implementation props.
interface AppHeaderProps {}

// redux props.
interface AppHeaderStateProps {
  cardClassNames: string[];
  setActiveCardClassName: (cardClassName: string) => any;
}

// component props.
type Props = AppHeaderProps & AppHeaderStateProps;

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

const AppHeader: React.SFC<Props> = props =>
  <header className="App-header" style={style}>
    <NavBar
      id="card-class-names-nav-bar"
      targets={composeTargets(
        props.cardClassNames,
        props.setActiveCardClassName
      )} />
  </header>;

export default AppHeader;
