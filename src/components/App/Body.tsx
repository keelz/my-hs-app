import * as React from 'react';
import AppRouter from './Router';

interface AppBodyProps {}

const AppBody: React.SFC<AppBodyProps> = props =>
  <section className="App-body">
    <AppRouter />
  </section>;

export default AppBody;
