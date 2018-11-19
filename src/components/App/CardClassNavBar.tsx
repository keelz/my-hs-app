import * as React from 'react';
import { Link } from 'react-router-dom';

// implementation props.
interface AppNavBarProps {}

// redux props.
interface AppNavBarStateProps {
  cardClassNames: string[];
  setActiveClassName: (activeClassName: string) => any;
}

// component props.
type Props = AppNavBarProps & AppNavBarStateProps;

const handleSetActiveClassName = (className: string) =>
  (action: (className: string) => any) =>
  () => action(className);

const AppNavBar: React.SFC<Props> = props =>
  <React.Fragment>
    { props.cardClassNames.map(className =>
        <Link
          key={`nav-link-${className}`}
          className="App-nav-link"
          to="cards"
          onClick={handleSetActiveClassName(className)(props.setActiveClassName)}>
          {className}
        </Link>
      )
    }
  </React.Fragment>;

export default AppNavBar;
