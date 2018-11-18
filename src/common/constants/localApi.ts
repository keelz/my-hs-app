
const BASE_URI = process.env.NODE_ENV !== 'production'
  ? 'http://localhost:3001/api'
  : 'http://somedomain.com/api';

const PATH = {
  CREATE: {},
  READ: {
    TEST: '/test',
  },
  UPDATE: {},
  DELETE: {},
};

const RESPONSE_PARAMS = {};

const REQUEST_PARAMS = {};

export default {
  BASE_URI,
  PATH,
  RESPONSE_PARAMS,
  REQUEST_PARAMS,
};
