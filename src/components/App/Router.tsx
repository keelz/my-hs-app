import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Collection from '../../redux/containers/Collection';

const AppRouter: React.SFC = () =>
  <Switch>
    <Route exact path="/" component={Collection} />
  </Switch>;

export default AppRouter;
