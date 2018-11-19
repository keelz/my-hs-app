const BASE_URI = 'https://api.hearthstonejson.com';

const PATH = {
  CREATE: {},
  READ: {
    LATEST: '/v1/latest/enUS/cards.collectible.json',
  },
  UPDATE: {},
  DELETE: {},
};

const RESPONSE_PARAMS = {};

const REQUEST_PARAMS = {
  EXT: 'EXT',
  ID: 'ID',
  LOCALE: 'LOCALE',
  RESOLUTION: 'RESOLUTION',
};

export default {
  BASE_URI,
  PATH,
  RESPONSE_PARAMS,
  REQUEST_PARAMS,
};
