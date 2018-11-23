import * as React from 'react';
import { IComponentProps } from '../../common/models/App';
import { composeClassname } from '../../common/utils';
import ManaBar from '../../redux/containers/Collection/ManaBar';

interface ICollectionHeaderProps extends IComponentProps {}

const CollectionHeader: React.SFC<ICollectionHeaderProps> = props =>
  <div className={composeClassname('Collection-header')(props.className)}>
    <ManaBar />
  </div>;

export default CollectionHeader;
