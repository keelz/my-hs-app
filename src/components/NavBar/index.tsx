import * as React from 'react';
import * as classnames from 'classnames';
import { default as NavLinkComponent, NavLinkProps } from './NavLink';
import './NavBar.css';

// implementation props
interface INavBarProps {
  className?: string | string[];
  id: string;
}

const composeClassnames = (className?: string | string[]) => classnames(
  [
    'Nav-bar',
  ],
  className
);

export const NavBar: React.SFC<INavBarProps> = props =>
  <div id={props.id} className={composeClassnames(props.className)}>
    { props.children }
  </div>;

export const NavLink: React.SFC<NavLinkProps> = props =>
  <NavLinkComponent {...props}>{props.children}</NavLinkComponent>;
