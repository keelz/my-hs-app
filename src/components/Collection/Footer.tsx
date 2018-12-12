import * as React from 'react';
import { IComponentProps } from '../../common/models/App.model';
import { composeClassname } from '../../common/utils';
import ManaBar from '../../redux/containers/Collection/ManaBar';
import PlayStyle from '../../redux/containers/Collection/PlayStyle';

interface ICollectionFooterProps extends IComponentProps {}

export interface ICollectionFooterStateProps {}

type Props = ICollectionFooterProps & ICollectionFooterStateProps;

const CollectionFooter: React.SFC<Props> = props =>
  <div
    className={composeClassname([
      'Collection-footer',
      'flex',
    ])(props.className)}>
    <PlayStyle />
    <ManaBar />
  </div>;

export default CollectionFooter;
