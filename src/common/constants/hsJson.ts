// api base uri
const BASE_URI = 'https://api.hearthstonejson.com';

// image renderer base uri
const IMG_URI = 'https://art.hearthstonejson.com/v1/render/latest';

const PATH = {
  CREATE: {},
  READ: {
    IMAGE: '/{LOCALE}/{RESOLUTION}x/{ID}.{EXT}',
    LATEST: '/v1/latest/enUS/cards.collectible.json',
  },
  UPDATE: {},
  DELETE: {},
};

const RESPONSE_PARAMS = {
  COST: 'cost',
};

const RESPONSE_ENUM = {
  CARD_SET: {
    INVALID: 'INVALID',
    TEST_TEMPORARY: 'TEST',
    CORE: 'CORE',
    EXPERT1: 'Expert One',
    HOF: '[HOF] ETL REQUIRED',
    MISSIONS: '[MISSIONS] ETL REQUIRED',
    DEMO: 'Demonstration',
    NONE: 'NONE',
    CHEAT: 'CHEAT',
    BLANK: 'BLANK',
    DEBUG_SP: 'DEBUG_SP',
    PROMO: 'Promotional',
    NAXX: 'Naxxramas',
    GVG: '[GVG] ETL REQUIRED',
    BRM: '[BRM] ETL REQUIRED',
    TGT: 'The Grand Tournament',
    CREDITS: 'CREDITS',
    HERO_SKINS: 'Hero Skin',
    TB: '[TB] ETL REQUIRED',
    SLUSH: '[SLUSH] ETL REQUIRED',
    LOE: '[LOE] ETL REQUIRED',
    OG: '[OG] ETL REQUIRED',
    OG_RESERVE: '[OG_RESERVE] ETL REQUIRED',
    KARA: '[KARA] ETL REQUIRED',
    KARA_RESERVE: '[KARA_RESERVE] ETL REQUIRED',
    GANGS: 'Gangs of Gadgetzan',
    GANGS_RESERVE: 'Gangs of Gadgetzan Reserve',
    UNGORO: 'Ungoro Crater',
    ICECROWN: 'Icecrown',
    LOOTAPALOOZA: 'Lootapalooza',
    GILNEAS: 'Gilneas',
    BOOMSDAY: 'Booms Day',
    TROLL: '[TROLL] ETL REQUIRED',
    TAVERNS_OF_TIME: 'Taverns of Time',
  },
  CARD_TYPE: {
    INVALID: 'INVALID',
    GAME: 'GAME',
    PLAYER: 'PLAYER',
    HERO: 'HERO',
    MINION: 'MINION',
    SPELL: 'SPELL',
    ENCHANTMENT: 'ENCHANTMENT',
    WEAPON: 'WEAPON',
    ITEM: 'ITEM',
    TOKEN: 'TOKEN',
    HERO_POWER: 'HERO POWER',
  },
  RACE: {
    INVALID: 'INVALID',
    BLOODELF: 'Blood Elf',
    DRAENEI: 'DRAENEI',
    DWARF: 'DWARF',
    GNOME: 'GNOME',
    GOBLIN: 'GOBLIN',
    HUMAN: 'HUMAN',
    NIGHTELF: 'NIGHTELF',
    ORC: 'ORC',
    TAUREN: 'TAUREN',
    TROLL: 'TROLL',
    UNDEAD: 'UNDEAD',
    WORGEN: 'WORGEN',
    GOBLIN2: 'GOBLIN',
    MURLOC: 'MURLOC',
    DEMON: 'DEAMON',
    SCOURGE: 'SCOURGE',
    MECHANICAL: 'MECHANICAL',
    ELEMENTAL: 'ELEMENTAL',
    OGRE: 'OGRE',
    BEAST: 'BEAST',
    TOTEM: 'TOTEM',
    NERUBIAN: 'NERUBIAN',
    PIRATE: 'PIRATE',
    DRAGON: 'DRAGON',
    BLANK: 'BLANK',
    ALL: 'ALL',
    EGG: 'EGG',
    PET: 'PET',
  },
  RARITY: {
    INVALID: 'INVALID',
    COMMON: 'COMMON',
    FREE: 'FREE',
    RARE: 'RARE',
    EPIC: 'EPIC',
    LEGENDARY: 'LEGENDARY',
    UNKNOWN_6: 'UNKNOWN',
  },
};

const REQUEST_PARAMS = {
  EXT: 'EXT',
  ID: 'ID',
  LOCALE: 'LOCALE',
  RESOLUTION: 'RESOLUTION',
};

export default {
  BASE_URI,
  IMG_URI,
  PATH,
  RESPONSE_ENUM,
  RESPONSE_PARAMS,
  REQUEST_PARAMS,
};
