
// TODO: finish modeling card interface.
export interface ICard {
  cardClass: CardClassName;
  cost: number;
  flavor: string;
  id: string;
  name: string;
  text: string;
}

export enum CardClassName {
  DEATHKNIGHT = 'DEATHKNIGHT',
  DREAM = 'DREAM',
  DRUID = 'DRUID',
  HUNTER = 'HUNTER',
  MAGE = 'MAGE',
  NEUTRAL = 'NEUTRAL',
  PALADIN = 'PALADIN',
  PRIEST = 'PRIEST',
  ROGUE = 'ROGUE',
  SHAMAN = 'SHAMAN',
  WARLOCK = 'WARLOCK',
  WARRIOR = 'WARRIOR',
  WHIZBANG = 'WHIZBANG',
}

export enum CardLocale {
  EN = 'enUS',
}

export enum CardResolution {
  SMALL = 256,
  LARGE = 512,
}

export enum CardExt {
  PNG = 'png',
}
