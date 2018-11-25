import * as React from 'react';
import { IComponentProps, BlockOrientation } from '../../common/models/app.model';
import { composeClassname } from '../../common/utils';

interface IBodyNavButtonProps extends IComponentProps {
  align: BlockOrientation.LEFT | BlockOrientation.RIGHT;
  onClick?: () => void;
}

const composeAlignmentClassname = (align: BlockOrientation) =>
  align === BlockOrientation.LEFT
    ? 'Collection-align-left'
    : 'Collection-align-right';

const BodyNavButton: React.SFC<IBodyNavButtonProps> = props =>
  <div
    className={composeClassname([
      'Collection-body-nav-button',
      composeAlignmentClassname(props.align),
    ])(props.className)}
    onClick={props.onClick}>
  </div>;

export default BodyNavButton;
