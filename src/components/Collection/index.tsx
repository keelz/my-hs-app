import * as React from 'react';
import { IComponentProps } from '../../common/models/App.model';
import CollectionBody from '../../redux/containers/Collection/Body';
import CollectionFooter from './Footer';
import CollectionHeader from './Header';
import './Collection.css';
import { composeClassname } from '../../common/utils';

interface ICollectionProps extends IComponentProps {}

const Collection: React.SFC<ICollectionProps> = props =>
  <div className={composeClassname('Collection')(props.className)}>
    <CollectionHeader />
    <CollectionBody />
    <CollectionFooter />
  </div>;

export default Collection;
