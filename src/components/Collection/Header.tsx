import * as React from 'react';
import { IComponentProps } from '../../common/models/App.model';
import { composeClassname } from '../../common/utils';
import ClassBar from '../../redux/containers/Collection/ClassBar';

interface ICollectionHeaderProps extends IComponentProps {}

const CollectionHeader: React.SFC<ICollectionHeaderProps> = props =>
  <div
    className={composeClassname([
      'Collection-header',
    ])(props.className)}>
    <ClassBar />
  </div>;

export default CollectionHeader;
