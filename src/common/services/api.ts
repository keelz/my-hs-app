import axios, { AxiosRequestConfig } from 'axios';
import API from '../constants/api';

// Replace path placeholders with values.
export const pathWithParameters = (withPath: string, parameters: { [name: string]: string }) => {
  let path = withPath;
  Object.keys(parameters).forEach(k => path = path.replace(`:${k}`, parameters[k]));
  return path;
};

// CRUD Wrapper for axios.
// https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
export default {
  // CREATE
  create: (path: string, payload: any, config?: AxiosRequestConfig) =>
    axios.post(`${API.BASE_URI}${path}`, payload, config),

  // READ
  read: (path: string) => axios.get(`${API.BASE_URI}${path}`),

  // UPDATE
  update: (path: string, payload: any, config?: AxiosRequestConfig) =>
    axios.put(`${API.BASE_URI}${path}`, payload, config),

  // DELETE
  delete: (path: string) => axios.delete(`${API.BASE_URI}${path}`),
};
