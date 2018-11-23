import * as React from 'react';
import { IComponentProps } from '../common/models/App';
import { composeClassname } from '../common/utils';
import { composeAssetSource } from '../common/services/hsJsonApi';
import {
  CardExt,
  CardLocale,
  CardResolution
} from '../common/models/Card';

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
