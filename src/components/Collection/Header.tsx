import * as React from 'react';
import { IComponentProps } from '../../common/models/App.model';
import { composeClassname } from '../../common/utils';
import ManaBar from '../../redux/containers/Collection/ManaBar';
import PlayStyle from '../../redux/containers/Collection/PlayStyle';

interface ICollectionHeaderProps extends IComponentProps {}

const CollectionHeader: React.SFC<ICollectionHeaderProps> = props =>
  <div className={composeClassname('Collection-header')(props.className)}>
    <ManaBar />
    <PlayStyle />
  </div>;

export default CollectionHeader;
