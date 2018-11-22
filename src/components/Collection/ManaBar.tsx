import * as React from 'react';
import { composeTextTargets } from '../../common/utils/navBar';
import HSJSON from '../../common/constants/hsJson';
import NavBar from '../NavBar';

export interface IManaBarStateProps {
  setFilter: (field: string, value: string) => any;
}

export const composeManaGems = () =>
  Array(8).fill(null).map((_, i) => i.toString());

export const composeLinkAction = (action: (field: string, value: string) => any) =>
  (index: string) => action(HSJSON.RESPONSE_PARAMS.COST, index);

const ManaBar: React.SFC<IManaBarStateProps> = props =>
  <div className="Collection-mana-bar">
    <NavBar
      id="collection-mana-bar"
      targets={composeTextTargets(
        composeManaGems(),
        composeLinkAction(props.setFilter)
    )} />
  </div>;

export default ManaBar;
