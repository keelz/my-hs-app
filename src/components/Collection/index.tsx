import * as React from 'react';
import './Collection.css';
import { ICollection } from '../../common/models/Collection';
import { CardClassName } from '../../common/models/Card';
import CollectionBody from './Body';
import CollectionHeader from './Header';

export interface ICollectionStateProps {
  activeCardClassName: CardClassName;
  collection: ICollection;
}

const Collection: React.SFC<ICollectionStateProps> = props =>
  <div className="Collection">
    <CollectionHeader />
    <CollectionBody collection={props.collection} />
  </div>;

export default Collection;
