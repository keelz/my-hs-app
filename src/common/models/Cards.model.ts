
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
  INVALID = 'INVALID',
	TEST_TEMPORARY = 'TEST_TEMPORARY',
	CORE = 'CORE',
	EXPERT1 = 'EXPERT1',
	HOF = 'HOF',
	MISSIONS = 'MISSIONS',
	DEMO = 'DEMO',
	NONE = 'NONE',
	CHEAT = 'CHEAT',
	BLANK = 'BLANK',
	DEBUG_SP = 'DEBUG_SP',
	PROMO = 'PROMO',
	NAXX = 'NAXX',
	GVG = 'GVG',
	BRM = 'BRM',
	TGT = 'TGT',
	CREDITS = 'CREDITS',
	HERO_SKINS = 'HERO_SKINS',
	TB = 'TB',
	SLUSH = 'SLUSH',
	LOE = 'LOE',
	OG = 'OG',
	OG_RESERVE = 'OG_RESERVE',
	KARA = 'KARA',
	KARA_RESERVE = 'KARA_RESERVE',
	GANGS = 'GANGS',
	GANGS_RESERVE = 'GANGS_RESERVE',
	UNGORO = 'UNGORO',
	ICECROWN = 'ICECROWN',
	LOOTAPALOOZA = 'LOOTAPALOOZA',
	GILNEAS = 'GILNEAS',
	BOOMSDAY = 'BOOMSDAY',
	TROLL = 'TROLL',
	TAVERNS_OF_TIME = 'TAVERNS_OF_TIME',
}

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
