import * as React from 'react';
import { IComponentProps, BlockOrientation } from '../../common/models/App.model';
import { composeClassname } from '../../common/utils';

interface IBodyNavButtonProps extends IComponentProps {
  active: boolean;
  align: BlockOrientation;
  onClick?: () => void;
}

export const composeAlignmentClassname = (align: BlockOrientation) =>
  align === BlockOrientation.LEFT
    ? 'Collection-align-left'
    : 'Collection-align-right';

export const composeIconContainerClassname = (props: IBodyNavButtonProps) =>
  `Collection-body-nav-button-icon${props.active ? ' active' : ''}`;

export const composeIconClassname = (props: IBodyNavButtonProps) =>
  props.align === BlockOrientation.LEFT
    ? 'fas fa-angle-left'
    : 'fas fa-angle-right';

const BodyNavButton: React.SFC<IBodyNavButtonProps> = props =>
  <div
    className={composeClassname([
      'Collection-body-nav-button',
      composeAlignmentClassname(props.align),
    ])(props.className)}
    onClick={props.onClick}>
    <div className={composeIconContainerClassname(props)}>
      <i className={composeIconClassname(props)} />
    </div>
  </div>;

export default BodyNavButton;
