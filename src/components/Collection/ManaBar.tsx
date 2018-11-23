import * as React from 'react';
import HSJSON from '../../common/constants/hsJson';
import { NavBar, NavLink } from '../NavBar';
import ManaGem from '../ManaGem';

export interface IManaBarStateProps {
  setFilter: (field: string, value: string) => any;
}

export const composeManaGems = (): number[] =>
  Array(8).fill(null).map((_, i) => i);

export const composeLinkAction = (action: (field: string, value: string) => any) =>
  (index: number) =>
  action(HSJSON.RESPONSE_PARAMS.COST, index.toString());

const ManaBar: React.SFC<IManaBarStateProps> = props =>
  <div className="Collection-mana-bar">
    <NavBar id="collection-mana-bar">
      { composeManaGems().map(gem =>
          <NavLink
            key={`mana-bar-btn${gem}`}
            render={(_) => {
              return (
                <ManaGem
                  cost={gem}
                  onClick={() => composeLinkAction(props.setFilter)(gem)} />
              );
            }} />
      )}
    </NavBar>
  </div>;

export default ManaBar;
