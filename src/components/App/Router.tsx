import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Placeholder from '../Placeholder';

// implementation props.
interface AppRouterProps {}

// redux props.
interface AppRouterStateProps {}

// component props.
type Props = AppRouterProps & AppRouterStateProps;

const AppRouter: React.SFC<Props> = props =>
  <Switch>
    <Route exact path="/" component={() => <Placeholder text="gfy" />} />
    <Route path="/test" component={() => <Placeholder text="test" />} />
  </Switch>;

export default AppRouter;
