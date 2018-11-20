import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Collection from '../../redux/containers/Collection';

// implementation props.
interface AppRouterProps {}

// redux props.
interface AppRouterStateProps {}

// component props.
type Props = AppRouterProps & AppRouterStateProps;

const AppRouter: React.SFC<Props> = props =>
  <Switch>
    <Route exact path="/" component={Collection} />
  </Switch>;

export default AppRouter;
