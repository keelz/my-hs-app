import * as React from 'react';
import './Collection.css';
import { ICollection } from '../../common/models/Collection';
import { CardClassName } from '../../common/models/Card';
import ManaBar from '../../redux/containers/Collection/ManaBar';
import CollectionBody from './Body';

export interface ICollectionStateProps {
  activeCardClassName: CardClassName;
  collection: ICollection;
}

const Collection: React.SFC<ICollectionStateProps> = props =>
  <div className="Collection">
    <ManaBar />
    <CollectionBody collection={props.collection} />
  </div>;

export default Collection;
