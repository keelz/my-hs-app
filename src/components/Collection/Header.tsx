import * as React from 'react';
import ManaBar from '../../redux/containers/Collection/ManaBar';

interface CollectionHeaderProps {}

const CollectionHeader: React.SFC<CollectionHeaderProps> = props =>
  <div className="Collection-header">
    <ManaBar />
  </div>;

export default CollectionHeader;
