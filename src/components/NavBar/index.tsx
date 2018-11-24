import * as React from 'react';
import { IComponentProps } from '../../common/models/app.model';
import { composeClassname } from '../../common/utils';
import { default as NavItemComponent, INavItemProps } from './NavItem';
import './NavBar.css';

/**
 * USAGE:
 * import { NavBar, NavItem }
 * no default export.
 */

// implementation props
interface INavBarProps extends IComponentProps {
  className?: string | string[];
  id: string;
}

export const NavBar: React.SFC<INavBarProps> = props =>
  <div id={props.id} className={composeClassname('Nav-bar')(props.className)}>
    <ul className="Nav-bar-list">
      { props.children }
    </ul>
  </div>;

export const NavItem: React.SFC<INavItemProps> = props =>
  <NavItemComponent {...props}>{props.children}</NavItemComponent>;
