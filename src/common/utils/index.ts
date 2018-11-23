import * as classnames from 'classnames';

export const composeClassname = (defaultClassname: string | string[]) =>
  (className?: string | string[]) =>
  classnames(defaultClassname, className);

export default {
  composeClassname,
};
