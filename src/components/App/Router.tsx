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

const AppRouter: React.SFC<Props> = props =>
  <Switch>
    <Route exact path="/" component={() => <Placeholder
      text="HOME" />} />
    <Route path="/test" component={() => <Card
      id={testCard.id}
      resolution={CardResolution.SMALL}
      ext={CardExt.PNG}
      locale={CardLocale.EN} />} />
  </Switch>;

export default AppRouter;
