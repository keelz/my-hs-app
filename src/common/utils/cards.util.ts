import {
  ICard,
  CardClassName
} from '../models/Cards.model';

export const composeCardClassNames = (cards: ICard[]): string[] => {
  // reduce cards to string array and sort.
  const cardClassNames = cards.reduce(
    (a: string[], b: ICard) => {
      const { cardClass } = b;
      switch (cardClass) {
        case CardClassName.NEUTRAL:
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
  composeCardClassNames,
};
