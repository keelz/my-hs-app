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

const RESPONSE_PARAMS = {};

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
  RESPONSE_PARAMS,
  REQUEST_PARAMS,
};
