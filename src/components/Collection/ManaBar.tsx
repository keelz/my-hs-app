import * as React from 'react';
import { IComponentProps } from '../../common/models/App.model';
import { composeClassname } from '../../common/utils';
import APP from '../../common/constants/app';
import { NavBar, NavItem } from '../NavBar';
import ManaGem from '../ManaGem';

const { FILTERS } = APP.COLLECTION;

interface IManaBarProps extends IComponentProps {}

export interface IManaBarStateProps {
  activeGem?: number;
  setFilter: (field: string, value: string | string[]) => any;
}

type Props = IManaBarProps & IManaBarStateProps;

export const composeManaGems = (): number[] =>
  Array(8).fill(null).map((_, i) => i);

export const composeClickAction = (action: (field: string, value: string) => any) =>
  (index: number) =>
  action(FILTERS.COST, index.toString());

const ManaBar: React.SFC<Props> = props =>
  <NavBar
    id="collection-mana-bar"
    className={composeClassname('Collection-mana-bar shadow-md')(props.className)}>
    { composeManaGems().map(gem =>
      <NavItem
        key={`mana-bar-btn${gem}`}
        render={(_) => {
          return (
            <ManaGem
              className={props.activeGem === gem ? 'active' : ''}
              cost={gem}
              onClick={() => composeClickAction(props.setFilter)(gem)} />
          );
        }} />
    )}
  </NavBar>;

export default ManaBar;
