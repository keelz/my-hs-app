import * as React from 'react';

// implementation props
interface LoadingAnimationProps {}

// redux props.
interface LoadingAnimationStateProps {}

// component props.
type Props = LoadingAnimationProps & LoadingAnimationStateProps;

const LoadingAnimation: React.SFC<Props> = props =>
  <div className="loading-animation-container">
    <div className="loading-animation-spinner" />
  </div>;

export default LoadingAnimation;
