import * as React from 'react';
import { IComponentProps, BlockOrientation } from '../../common/models/app.model';
import { composeClassname } from '../../common/utils';

interface IBodyNavButtonProps extends IComponentProps {
  align: BlockOrientation.LEFT | BlockOrientation.RIGHT;
  onClick?: () => void;
}

export const composeAlignmentClassname = (align: BlockOrientation) =>
  align === BlockOrientation.LEFT
    ? 'Collection-align-left'
    : 'Collection-align-right';

export const composeIconContainerClassname = () =>
  'Collection-body-nav-button-icon';

export const composeIconClassname = (align: BlockOrientation) =>
  align === BlockOrientation.LEFT
    ? 'fas fa-angle-left'
    : 'fas fa-angle-right';

const BodyNavButton: React.SFC<IBodyNavButtonProps> = props =>
  <div
    className={composeClassname([
      'Collection-body-nav-button',
      composeAlignmentClassname(props.align),
    ])(props.className)}
    onClick={props.onClick}>
    <div className={composeIconContainerClassname()}>
      <i className={composeIconClassname(props.align)} />
    </div>
  </div>;

export default BodyNavButton;
