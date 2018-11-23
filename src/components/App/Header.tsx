import * as React from 'react';
import * as classnames from 'classnames';
import { NavBar, NavItem } from '../NavBar';

// redux props.
interface IAppHeaderStateProps {
  activeClassName?: string;
  cardClassNames: string[];
  setActiveCardClassName: (cardClassName: string) => any;
}

export const composeButtonClassname = (
  className: string,
  activeClassName?: string
) => !!activeClassName && activeClassName === className
  ? ['btn btn-light active']
  : ['btn btn-light'];

const AppHeader: React.SFC<IAppHeaderStateProps> = props =>
  <header className="App-header">
    <NavBar id="card-class-names-nav-bar">
      { props.cardClassNames.map(cardClassName =>
          <NavItem
            key={`app-header-nav-link-${cardClassName}`}
            render={(_) => {
              return (
                <button
                  className={classnames(composeButtonClassname(
                    cardClassName,
                    props.activeClassName
                  ))}
                  onClick={() => props.setActiveCardClassName(cardClassName)}>
                  {cardClassName}
                </button>
              );
            }} />
      )}
    </NavBar>
  </header>;

export default AppHeader;
