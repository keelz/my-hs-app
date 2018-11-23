import * as React from 'react';
import { default as NavLinkComponent, NavLinkProps } from './NavLink';
import './NavBar.css';

// implementation props
interface INavBarProps {
  id: string;
}

export const NavBar: React.SFC<INavBarProps> = props =>
  <div id={props.id} className="Nav-bar">
    { props.children }
  </div>;

export const NavLink: React.SFC<NavLinkProps> = props =>
  <NavLinkComponent {...props}>{props.children}</NavLinkComponent>;
