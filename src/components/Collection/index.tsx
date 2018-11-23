import * as React from 'react';
import './Collection.css';
import { ICollection } from '../../common/models/Collection';
import { CardClassName } from '../../common/models/Card';
import { IComponentProps } from '../../common/models/App';
import CollectionBody from './Body';
import CollectionHeader from './Header';

interface ICollectionProps extends IComponentProps {}

export interface ICollectionStateProps {
  activeCardClassName: CardClassName;
  collection: ICollection;
}

type Props = ICollectionProps & ICollectionStateProps;

const Collection: React.SFC<Props> = props =>
  <div className="Collection">
    <CollectionHeader />
    <CollectionBody collection={props.collection} />
  </div>;

export default Collection;
