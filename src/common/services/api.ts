import axios, { AxiosRequestConfig } from 'axios';

// Replace path placeholders with values.
export const pathWithParameters = (
  withPath: string,
  parameters: { [name: string]: string }
) => {
  let path = withPath;
  Object.keys(parameters).forEach(k => path = path.replace(`{${k}}`, parameters[k]));
  return path;
};

// CRUD Wrapper for axios.
// https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
export default (baseUri: string) => ({
  // static helpers
  pathWithParameters,

  // CREATE
  create: (path: string, payload: any, config?: AxiosRequestConfig) =>
    axios.post(`${baseUri}${path}`, payload, config),

  // READ
  read: (path: string) => axios.get(`${baseUri}${path}`),

  // UPDATE
  update: (path: string, payload: any, config?: AxiosRequestConfig) =>
    axios.put(`${baseUri}${path}`, payload, config),

  // DELETE
  delete: (path: string) => axios.delete(`${baseUri}${path}`),
});
