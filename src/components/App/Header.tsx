import * as React from 'react';
import { NavBar, NavItem } from '../NavBar';

// redux props.
interface IAppHeaderStateProps {
  cardClassNames: string[];
  setActiveCardClassName: (cardClassName: string) => any;
}

const AppHeader: React.SFC<IAppHeaderStateProps> = props =>
  <header className="App-header">
    <NavBar id="card-class-names-nav-bar">
      { props.cardClassNames.map(cardClassName =>
          <NavItem
            key={`app-header-nav-link-${cardClassName}`}
            render={(_) => {
              return (
                <button
                  className="btn btn-light"
                  onClick={() => props.setActiveCardClassName(cardClassName)}>
                  {cardClassName}
                </button>
              );
            }} />
      )}
    </NavBar>
  </header>;

export default AppHeader;
