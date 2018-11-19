import CARD from '../constants/card';
import HSJSON from '../constants/hsJson';
import {
  ICard,
  CardClassName
} from '../models/Card';

export const cardSrcWithParameters = (
  id: string,
  locale: string,
  resolution: number,
  ext: string
) => CARD.BASE_URI + CARD.RENDER_PATH
  .replace(`\{${HSJSON.REQUEST_PARAMS.LOCALE}\}`, locale)
  .replace(`\{${HSJSON.REQUEST_PARAMS.RESOLUTION}\}`, resolution.toString())
  .replace(`\{${HSJSON.REQUEST_PARAMS.ID}\}`, id)
  .replace(`\{${HSJSON.REQUEST_PARAMS.EXT}\}`, ext);

export const composeCardClassNames = (cards: ICard[]): string[] => {
  // reduce cards to string array and sort.
  const cardClassNames = cards.reduce(
    (a: string[], b: ICard) => {
      const { cardClass } = b;
      switch (cardClass) {
        case CardClassName.DEATHKNIGHT:
        case CardClassName.DREAM:
        case CardClassName.NEUTRAL:
        case CardClassName.WHIZBANG:
        case undefined: return a;
      }
      if (a.indexOf(cardClass) >= 0) return a;
      return [...a, cardClass];
    },
    []
  ).sort() as string[];
  // push neutral type onto array.
  cardClassNames.push(CardClassName.NEUTRAL);
  return cardClassNames;
};

export default {
  cardSrcWithParameters,
  composeCardClassNames,
};
