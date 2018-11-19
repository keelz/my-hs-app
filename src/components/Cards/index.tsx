import * as React from 'react';
import Card from '../Card';
import './Cards.css';
import {
  Card as CardType,
  CardResolution,
  CardExt,
  CardLocale
} from '../../redux/reducers/Cards';

interface CardsProps {}

export interface CardsStateProps {
  activeCardClassName: string;
  cards: CardType[];
}

type Props = CardsProps & CardsStateProps;

const Cards: React.SFC<Props> = props =>
  <div className="Cards">
    <div className="Cards-title">
      {props.activeCardClassName}: {props.cards.length}
    </div>
    <div className="Cards-collection">
      { props.cards.map(card =>
        <Card
          key={card.id}
          ext={CardExt.PNG}
          id={card.id}
          locale={CardLocale.EN}
          resolution={CardResolution.SMALL} />)
      }
    </div>
  </div>;

export default Cards;
