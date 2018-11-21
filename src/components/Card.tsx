import * as React from 'react';
import { composeAssetSource } from '../common/services/hsJsonApi';
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
    src={composeAssetSource(
      props.id,
      props.locale,
      props.resolution,
      props.ext
    )} />;

export default Card;
