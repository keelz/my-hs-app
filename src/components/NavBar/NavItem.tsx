import * as React from 'react';
import { IComponentProps } from '../../common/models/App';
import { composeClassname } from '../../common/utils';

export interface INavItemProps extends IComponentProps {
  render?: (children: React.ReactNode) => JSX.Element;
}

const NavItem: React.SFC<INavItemProps> = props =>
  <li className={composeClassname('Nav-item')(props.className)}>
    { props.render
        ? props.render(props.children)
        : props.children
    }
  </li>;

export default NavItem;
