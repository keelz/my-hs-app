import * as React from 'react';
import * as classnames from 'classnames';

export interface IManaGemProps {
  className?: string;
  cost: number;
  onClick?: () => void;
}

const composeClassnames = (className?: string) =>
  classnames(
    [
      'btn',
      'btn-primary',
      'Mana-gem',
    ],
    className
  );

const ManaGem: React.SFC<IManaGemProps> = props =>
  <button
    className={composeClassnames(props.className)}
    onClick={props.onClick}>
    { props.cost }
  </button>;

export default ManaGem;
