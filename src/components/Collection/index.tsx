import * as React from 'react';
import Card from '../Card';
import './Collection.css';
import { ICollection } from '../../common/models/Collection';
import ManaBar from '../../redux/containers/Collection/ManaBar';
import {
  CardResolution,
  CardExt,
  CardLocale,
  CardClassName
} from '../../common/models/Card';

export interface ICollectionStateProps {
  activeCardClassName: CardClassName;
  collection: ICollection;
}

const Collection: React.SFC<ICollectionStateProps> = props =>
  <div className="Cards">
    <div className="Cards-title">
      { props.activeCardClassName }: { props.collection.cards.length }
    </div>
    <ManaBar />
    <div className="Cards-collection">
      { props.collection.cards.map(card =>
        <Card
          key={card.id}
          ext={CardExt.PNG}
          id={card.id}
          locale={CardLocale.EN}
          resolution={CardResolution.SMALL} />)
      }
    </div>
  </div>;

export default Collection;
