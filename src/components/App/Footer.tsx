import * as React from 'react';
import { IComponentProps } from '../../common/models/app.model';
import { composeClassname } from '../../common/utils';

interface AppFooterProps extends IComponentProps {}

const AppFooter: React.SFC<AppFooterProps> = props =>
  <section className={composeClassname('App-footer')(props.className)}>
  </section>;

export default AppFooter;
