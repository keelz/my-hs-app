
// TODO: finish modeling card interface.
export interface ICard {
  artist?: string;
  cardClass: CardClassName;
  collectible: boolean;
  cost: number;
  dbfId: number;
  flavor: string;
  id: string;
  name: string;
  race?: Race;
  rarity?: Rarity;
  set: CardSet;
  text: string;
  type: CardType;
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

export enum CardExt {
  PNG = 'png',
}

export enum CardLocale {
  EN = 'enUS',
}

export enum CardResolution {
  SMALL = 256,
  LARGE = 512,
}

export enum CardSet {
	BLANK = 'BLANK',
	BOOMSDAY = 'BOOMSDAY',
	BRM = 'BRM',
	CHEAT = 'CHEAT',
	CORE = 'CORE',
	CREDITS = 'CREDITS',
	DEBUG_SP = 'DEBUG_SP',
	DEMO = 'DEMO',
	EXPERT1 = 'EXPERT1',
	GANGS = 'GANGS',
	GANGS_RESERVE = 'GANGS_RESERVE',
	GILNEAS = 'GILNEAS',
	GVG = 'GVG',
	HERO_SKINS = 'HERO_SKINS',
	HOF = 'HOF',
	ICECROWN = 'ICECROWN',
	KARA = 'KARA',
	KARA_RESERVE = 'KARA_RESERVE',
	LOE = 'LOE',
	LOOTAPALOOZA = 'LOOTAPALOOZA',
	MISSIONS = 'MISSIONS',
	NAXX = 'NAXX',
	NONE = 'NONE',
	OG = 'OG',
	OG_RESERVE = 'OG_RESERVE',
	PROMO = 'PROMO',
	SLUSH = 'SLUSH',
	TAVERNS_OF_TIME = 'TAVERNS_OF_TIME',
	TB = 'TB',
	TEST_TEMPORARY = 'TEST_TEMPORARY',
	TGT = 'TGT',
	TROLL = 'TROLL',
	UNGORO = 'UNGORO',
  INVALID = 'INVALID',
}

export const standardSet = [
  'BOOMSDAY',
  'CORE',
  'EXPERT1',
  'GILNEAS',
  'ICECROWN',
  'LOOTAPALOOZA',
  'UNGORO',
];

export enum CardType {
  INVALID = 'INVALID',
	GAME = 'GAME',
	PLAYER = 'PLAYER',
	HERO = 'HERO',
	MINION = 'MINION',
	SPELL = 'SPELL',
	ENCHANTMENT = 'ENCHANTMENT',
	WEAPON = 'WEAPON',
	ITEM = 'ITEM',
	TOKEN = 'TOKEN',
	HERO_POWER = 'HERO_POWER',
}

export enum Race {
  INVALID = 'INVALID',
	BLOODELF = 'BLOODELF',
	DRAENEI = 'DRAENEI',
	DWARF = 'DWARF',
	GNOME = 'GNOME',
	GOBLIN = 'GOBLIN',
	HUMAN = 'HUMAN',
	NIGHTELF = 'NIGHTELF',
	ORC = 'ORC',
	TAUREN = 'TAUREN',
	TROLL = 'TROLL',
	UNDEAD = 'UNDEAD',
	WORGEN = 'WORGEN',
	GOBLIN2 = 'GOBLIN2',
	MURLOC = 'MURLOC',
	DEMON = 'DEAMON',
	SCOURGE = 'SCOURGE',
	MECHANICAL = 'MECHANICAL',
	ELEMENTAL = 'ELEMENTAL',
	OGRE = 'OGRE',
	BEAST = 'BEAST',
	TOTEM = 'TOTEM',
	NERUBIAN = 'NERUBIAN',
	PIRATE = 'PIRATE',
	DRAGON = 'DRAGON',
	BLANK = 'BLANK',
	ALL = 'ALL',
	EGG = 'EGG',
  PET = 'PET',
}

export enum Rarity {
  INVALID = 'INVALID',
	COMMON = 'COMMON',
	FREE = 'FREE',
	RARE = 'RARE',
	EPIC = 'EPIC',
	LEGENDARY = 'LEGENDARY',
  UNKNOWN_6 = 'UNKNOWN_6',
}
