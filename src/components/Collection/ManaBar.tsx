import * as React from 'react';
import { IComponentProps } from '../../common/models/App';
import { composeClassname } from '../../common/utils';
import HSJSON from '../../common/constants/hsJson';
import { NavBar, NavItem } from '../NavBar';
import ManaGem from '../ManaGem';

interface IManaBarProps extends IComponentProps {}

export interface IManaBarStateProps {
  setFilter: (field: string, value: string) => any;
}

type Props = IManaBarProps & IManaBarStateProps;

export const composeManaGems = (): number[] =>
  Array(8).fill(null).map((_, i) => i);

export const composeLinkAction = (action: (field: string, value: string) => any) =>
  (index: number) =>
  action(HSJSON.RESPONSE_PARAMS.COST, index.toString());

const ManaBar: React.SFC<Props> = props =>
  <NavBar
    id="collection-mana-bar"
    className={composeClassname('Collection-mana-bar')(props.className)}>
    { composeManaGems().map(gem =>
      <NavItem
        key={`mana-bar-btn${gem}`}
        render={(_) => {
          return (
            <ManaGem
              cost={gem}
              onClick={() => composeLinkAction(props.setFilter)(gem)} />
          );
        }} />
    )}
  </NavBar>;

export default ManaBar;
