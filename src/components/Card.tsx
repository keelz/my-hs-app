import * as React from 'react';
import { IComponentProps } from '../common/models/app.model';
import { composeClassname } from '../common/utils';
import { composeAssetSource } from '../common/services/hsJson.service';
import {
  CardExt,
  CardLocale,
  CardResolution
} from '../common/models/cards.model';

interface ICardProps extends IComponentProps {
  ext: CardExt;
  id: string;
  locale: CardLocale;
  resolution: CardResolution;
}

const Card: React.SFC<ICardProps> = props =>
  <img
    className={composeClassname('App-card')(props.className)}
    src={composeAssetSource(
      props.id,
      props.locale,
      props.resolution,
      props.ext
    )} />;

export default Card;
