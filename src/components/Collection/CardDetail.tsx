import * as React from 'react';
import * as classnames from 'classnames';
import HSJSON from '../../common/constants/hsJson';
import { IComponentProps } from '../../common/models/App.model';
import { composeClassname } from '../../common/utils';
import { composeAssetSource } from '../../common/services/hsJson.service';
import {
  CardExt,
  CardLocale,
  CardResolution,
  CardSet,
  ICard,
  CardType,
  Race,
  Rarity,
} from '../../common/models/Cards.model';

interface ICardDetailProps extends IComponentProps {
  card?: ICard;
}

const composeCardSetName = (cardSet: CardSet): String =>
  HSJSON.RESPONSE_ENUM.CARD_SET[cardSet];

const composeCardTypeName = (cardType: CardType): String =>
  HSJSON.RESPONSE_ENUM.CARD_TYPE[cardType];

const composeCardRaceName = (race?: Race): String =>
  !!race ? HSJSON.RESPONSE_ENUM.RACE[race] : '';

const composeCardRarityName = (rarity?: Rarity): String =>
  !!rarity ? HSJSON.RESPONSE_ENUM.RARITY[rarity] : '';

const CardDetail: React.SFC<ICardDetailProps> = props =>
  <div className={composeClassname([
    'App-card-detail',
    'flex',
    'flex-row'])(props.className)}>
    <div style={{ width: 340, backgroundColor: 'transparent' }}>
      <img style={{ marginTop: -60 }} src={composeAssetSource(
        props.card!.id,
        CardLocale.EN,
        CardResolution.LARGE,
        CardExt.PNG
      )} />
    </div>
    <div className={classnames([
      'bg-grey-darkest',
      'flex-grow',
      'rounded-lg',
      'shadow-outline',
      'text-white',
    ])} style={{ padding: 10, width: 300 }}>
      <h2>{props.card!.name}</h2>
      <p className="mt-2 mb-2">{props.card!.flavor}</p>
      <p className="mt-2 mb-2">Set: {composeCardSetName(props.card!.set)}</p>
      <p className="mt-2 mb-2">Type: {composeCardTypeName(props.card!.type)}</p>
      { props.card && props.card.race &&
        <p className="mt-2 mb-2">Race: {composeCardRaceName(props.card!.race)}</p>
      }
      { props.card && props.card.rarity &&
        <p className="mt-2 mb-2">Rarity: {composeCardRarityName(props.card.rarity)}</p>
      }
    </div>
  </div>;

export default CardDetail;
