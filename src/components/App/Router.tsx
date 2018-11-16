import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Placeholder from '../Placeholder';

interface AppRouterProps {}

const AppRouter: React.SFC<AppRouterProps> = props =>
  <Switch>
    <Route exact path="/" component={() => <Placeholder text="root" />} />
    <Route path="/test" component={() => <Placeholder text="test" />} />
  </Switch>;

export default AppRouter;
