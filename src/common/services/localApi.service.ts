import api from './api.service';
import LOCAL_API from '../constants/localApi';

export default api(LOCAL_API.BASE_URI);
