import * as React from 'react';
import { IComponentProps } from '../common/models/app.model';
import { composeClassname } from '../common/utils';
import manaCrystal from '../common/assets/img/mana_crystal.png';

export interface IManaGemProps extends IComponentProps {
  active?: boolean;
  cost: number;
  onClick?: () => void;
}

const ManaGem: React.SFC<IManaGemProps> = props =>
  <div
    className={composeClassname('Mana-gem')(props.className)}
    onClick={props.onClick}>
    <img
      className="Mana-gem-nav-img"
      src={manaCrystal} alt="gem" />
    <div className="Mana-gem-nav-text">{props.cost}</div>
  </div>;

export default ManaGem;
