import * as React from 'react';

export interface NavLinkProps {
  render?: (children: React.ReactNode) => JSX.Element;
}

const NavLink: React.SFC<NavLinkProps> = props =>
  <div className="Nav-link">
    { props.render
        ? props.render(props.children)
        : props.children
    }
  </div>;

export default NavLink;
