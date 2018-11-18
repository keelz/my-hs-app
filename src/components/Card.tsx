import * as React from 'react';
import cardUtil from '../common/utils/card';
import {
  CardExt,
  CardLocale,
  CardResolution
} from '../redux/reducers/Cards';

interface CardProps {
  id: string;
  ext: CardExt;
  locale: CardLocale;
  resolution: CardResolution;
}

interface CardStateProps {}

type Props = CardProps & CardStateProps;

const Card: React.SFC<Props> = props =>
  <img
    width={props.resolution}
    src={cardUtil.cardSrcWithParameters(
      props.id,
      props.locale,
      props.resolution,
      props.ext
    )} />;

export default Card;
