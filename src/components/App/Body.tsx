import * as React from 'react';
import AppRouter from './Router';

// implementation props.
interface AppBodyProps {}

// redux props.
interface AppBodyStateProps {}

// component props.
type Props = AppBodyProps & AppBodyStateProps;

const AppBody: React.SFC<Props> = props =>
  <section className="App-body">
    <AppRouter />
  </section>;

export default AppBody;
