import * as React from 'react';
import { ICollection } from '../../common/models/Collection.model';
import { CardClassName } from '../../common/models/Cards.model';
import { IComponentProps } from '../../common/models/App.model';
import CollectionBody from '../../redux/containers/Collection/Body';
import CollectionFooter from './Footer';
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
    <CollectionFooter />
  </div>;

export default Collection;
