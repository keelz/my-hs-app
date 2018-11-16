import * as React from 'react';

// implementation props.
interface AppFooterProps {}

// redux props.
interface AppFooterStateProps {}

// component props.
type Props = AppFooterProps & AppFooterStateProps;

const AppFooter: React.SFC<Props> = props =>
  <section className="App-footer">
  </section>;

export default AppFooter;
