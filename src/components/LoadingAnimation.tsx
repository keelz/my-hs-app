import * as React from 'react';
import { IComponentProps } from '../common/models/App';
import { composeClassname } from '../common/utils';

interface ILoadingAnimationProps extends IComponentProps {}

const LoadingAnimation: React.SFC<ILoadingAnimationProps> = props =>
  <div className={composeClassname('loading-animation-container')(props.className)}>
    <div className="loading-animation-spinner" />
  </div>;

export default LoadingAnimation;
