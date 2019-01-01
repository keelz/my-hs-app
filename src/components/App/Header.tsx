import * as React from 'react';
import { IComponentProps } from '../../common/models/App.model';
import { composeClassname } from '../../common/utils';

interface IAppHeaderProps extends IComponentProps {}

const AppHeader: React.SFC<IAppHeaderProps> = props =>
  <section className={composeClassname('App-header')(props.className)}>
  </section>;

export default AppHeader;
