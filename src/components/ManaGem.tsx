import * as React from 'react';
import { IComponentProps } from '../common/models/App';
import { composeClassname } from '../common/utils';

export interface IManaGemProps extends IComponentProps {
  cost: number;
  onClick?: () => void;
}

const defaultClassnames = [
  'btn',
  'btn-primary',
  'Mana-gem',
];

const ManaGem: React.SFC<IManaGemProps> = props =>
  <button
    className={composeClassname(defaultClassnames)(props.className)}
    onClick={props.onClick}>
    { props.cost }
  </button>;

export default ManaGem;
