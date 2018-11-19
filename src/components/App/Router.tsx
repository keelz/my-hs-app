import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cards from '../../redux/containers/Cards';

// implementation props.
interface AppRouterProps {}

// redux props.
interface AppRouterStateProps {}

// component props.
type Props = AppRouterProps & AppRouterStateProps;

const AppRouter: React.SFC<Props> = props =>
  <Switch>
    <Route path="/cards" component={Cards} />
  </Switch>;

export default AppRouter;
