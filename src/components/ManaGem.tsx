import * as React from 'react';

export interface IManaGemProps {
  cost: number;
}

const ManaGem: React.SFC<IManaGemProps> = props =>
  <div className="Mana-gem">{props.cost}</div>;

export default ManaGem;
