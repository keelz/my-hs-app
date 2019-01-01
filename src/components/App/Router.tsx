import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Collection from '../Collection';

const AppRouter: React.SFC = () =>
  <Switch>
    <Route exact path="/" component={Collection} />
  </Switch>;

export default AppRouter;
