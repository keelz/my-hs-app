import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Placeholder from '../Placeholder';
import Card from '../Card';
import {
  CardExt,
  CardLocale,
  CardResolution
} from '../../redux/reducers/Cards';

// implementation props.
interface AppRouterProps {}

// redux props.
interface AppRouterStateProps {}

// component props.
type Props = AppRouterProps & AppRouterStateProps;

const testCard = require('../../common/mocks/card.json');

const composeCard = () =>
  <Card
    id={testCard.id}
    resolution={CardResolution.SMALL}
    ext={CardExt.PNG}
    locale={CardLocale.EN} />;

const AppRouter: React.SFC<Props> = props =>
  <Switch>
    <Route exact path="/" component={() => <Placeholder text="gfy" />} />
    <Route path="/test" component={composeCard} />
  </Switch>;

export default AppRouter;
