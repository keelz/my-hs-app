import * as React from 'react';
import AppRouter from './Router';
import { composeClassname } from '../../common/utils';
import { IComponentProps } from '../../common/models/app.model';

interface AppBodyProps extends IComponentProps {}

const AppBody: React.SFC<AppBodyProps> = props =>
  <section className={composeClassname('App-body')(props.className)}>
    <AppRouter />
  </section>;

export default AppBody;
