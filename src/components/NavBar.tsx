import * as React from 'react';
import * as classnames from 'classnames';
import { Link } from 'react-router-dom';

interface INavBarProps {
  id: string;
  targets: ITarget[];
}

export interface ITarget {
  action?: (...args: any[]) => void;
  path: string;
  text?: string;
}

const composeClassnames = () => classnames([
  'Nav-bar',
]);

const NavBar: React.SFC<INavBarProps> = props =>
  <div id={props.id} className={composeClassnames()}>
    { props.targets.map((target, i) =>
        <Link
          key={`nav-bar-link-${props.id}-${i}`}
          onClick={target.action}
          className="link"
          to={target.path}>
          { target.text
              ? <span>{target.text}</span>
              : <></>
          }
        </Link>
      )
    }
  </div>;

export default NavBar;
