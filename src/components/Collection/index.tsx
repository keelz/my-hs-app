import * as React from 'react';
import { ICollection } from '../../common/models/collection.model';
import { CardClassName } from '../../common/models/cards.model';
import { IComponentProps } from '../../common/models/app.model';
import CollectionBody from '../../redux/containers/Collection/Body';
import CollectionHeader from './Header';
import './Collection.css';

interface ICollectionProps extends IComponentProps {}

/**
 * MODEL
 */
export interface ICollectionStateProps {
  activeCardClassName: CardClassName;
  collection: ICollection;
}

type Props = ICollectionProps & ICollectionStateProps;

/**
 * COMPONENT
 */
const Collection: React.SFC<Props> = props =>
  <div className="Collection">
    <CollectionHeader />
    <CollectionBody collection={props.collection} />
  </div>;

export default Collection;
