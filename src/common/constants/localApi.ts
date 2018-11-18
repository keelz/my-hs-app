
const BASE_URI = process.env.NODE_ENV !== 'production'
  ? 'http://localhost:3001/api'
  : 'http://somedomain.com/api';

export default {
  BASE_URI,
  PATH: {
    CREATE: {},
    READ: {
      TEST: '/test',
    },
    UPDATE: {},
    DELETE: {},
  },
  RESPONSE_PARAMS: {},
  REQUEST_PARAMS: {},
};
