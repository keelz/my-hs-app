import * as React from 'react';
import * as classnames from 'classnames';
import { composeAssetSource } from '../common/services/hsJsonApi';
import {
  CardExt,
  CardLocale,
  CardResolution
} from '../common/models/Card';

interface ICardProps {
  className?: string | string[];
  ext: CardExt;
  id: string;
  locale: CardLocale;
  resolution: CardResolution;
}

const composeClassnames = (className?: string | string[]) =>
  classnames(
    [
      'Card',
    ],
    className
  );

const Card: React.SFC<ICardProps> = props =>
  <img
    className={composeClassnames(props.className)}
    src={composeAssetSource(
      props.id,
      props.locale,
      props.resolution,
      props.ext
    )} />;

export default Card;
