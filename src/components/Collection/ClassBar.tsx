import * as React from 'react';
import * as classnames from 'classnames';
import { IComponentProps } from '../../common/models/App.model';
import { NavBar } from '../NavBar';
import { composeClassname } from '../../common/utils';
import NavItem from '../NavBar/NavItem';

interface IClassBarProps extends IComponentProps {}

export interface IClassBarStateProps {
  activeClassName?: string;
  cardClassNames: string[];
  setActiveCardClassName: (cardClassName: string) => any;
}

type Props = IClassBarProps & IClassBarStateProps;

export const composeButtonClassname = (
  className: string,
  activeClassName?: string
) => !!activeClassName && activeClassName === className
  ? ['btn btn-light active']
  : ['btn btn-light'];

const ClassBar: React.SFC<Props> = props =>
  <NavBar
    className={composeClassname('Collection-classbar')(props.className)}
    id="card-class-name-nav-bar">
    { props.cardClassNames.map(cardClassName =>
        <NavItem
          key={`card-class-nav-link-${cardClassName}`}
          render={() => {
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
  </NavBar>;

export default ClassBar;
