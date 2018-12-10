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
    BLANK: 'BLANK',
    BOOMSDAY: 'Boomsday Project',
    BRM: '[BRM] ETL REQUIRED',
    CHEAT: 'CHEAT',
    CORE: 'CORE',
    CREDITS: 'CREDITS',
    DEBUG_SP: 'DEBUG_SP',
    DEMO: 'Demonstration',
    EXPERT1: 'Expert One',
    GANGS_RESERVE: 'Gangs of Gadgetzan Reserve',
    GANGS: 'Gangs of Gadgetzan',
    GILNEAS: 'Witchwood',
    GVG: '[GVG] ETL REQUIRED',
    HERO_SKINS: 'Hero Skin',
    HOF: '[HOF] ETL REQUIRED',
    ICECROWN: 'Knights of the Frozen Throne',
    INVALID: 'INVALID',
    KARA_RESERVE: '[KARA_RESERVE] ETL REQUIRED',
    KARA: '[KARA] ETL REQUIRED',
    LOE: '[LOE] ETL REQUIRED',
    LOOTAPALOOZA: 'Kobolds & Catacombs',
    MISSIONS: '[MISSIONS] ETL REQUIRED',
    NAXX: 'Naxxramas',
    NONE: 'NONE',
    OG_RESERVE: '[OG_RESERVE] ETL REQUIRED',
    OG: '[OG] ETL REQUIRED',
    PROMO: 'Promotional',
    SLUSH: '[SLUSH] ETL REQUIRED',
    TAVERNS_OF_TIME: 'Taverns of Time',
    TB: '[TB] ETL REQUIRED',
    TEST_TEMPORARY: 'TEST',
    TGT: 'The Grand Tournament',
    TROLL: 'Rastakhan\'s Rumble',
    UNGORO: 'Journey to Ungoro',
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
