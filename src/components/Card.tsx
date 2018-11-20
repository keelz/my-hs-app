import * as React from 'react';
import { cardSrcWithParameters } from '../common/utils/card';
import {
  CardExt,
  CardLocale,
  CardResolution
} from '../common/models/Card';

interface ICardProps {
  id: string;
  ext: CardExt;
  locale: CardLocale;
  resolution: CardResolution;
}

const Card: React.SFC<ICardProps> = props =>
  <img
    width={props.resolution}
    style={{ marginBottom: -45 }}
    src={cardSrcWithParameters(
      props.id,
      props.locale,
      props.resolution,
      props.ext
    )} />;

export default Card;
