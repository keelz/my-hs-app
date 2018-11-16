import * as React from 'react';

interface LoadingAnimationProps {}

const LoadingAnimation: React.SFC<LoadingAnimationProps> = props =>
  <div className="loading-animation-container">
    <div className="loading-animation-spinner" />
  </div>;

export default LoadingAnimation;
