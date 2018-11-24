import * as React from 'react';
import { IComponentProps } from '../common/models/App';

export interface IManaGemProps extends IComponentProps {
  cost: number;
  onClick?: () => void;
}

const ManaGem: React.SFC<IManaGemProps> = props =>
  <div className="Mana-gem" onClick={props.onClick}>
    <img
      className="Mana-gem-nav-img"
      src="https://hsreplay.net/static/images/mana_crystal.png" alt="gem" />
    <div className="Mana-gem-nav-text">{props.cost}</div>
  </div>;

export default ManaGem;
