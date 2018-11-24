import HSJSON from '../constants/hsJson';
import api from './api.service';

const hsJsonApi = api(HSJSON.BASE_URI);

export const composeAssetSource = (
  id: string,
  locale: string,
  resolution: number,
  ext: string
) => HSJSON.IMG_URI + HSJSON.PATH.READ.IMAGE
  .replace(`\{${HSJSON.REQUEST_PARAMS.LOCALE}\}`, locale)
  .replace(`\{${HSJSON.REQUEST_PARAMS.RESOLUTION}\}`, resolution.toString())
  .replace(`\{${HSJSON.REQUEST_PARAMS.ID}\}`, id)
  .replace(`\{${HSJSON.REQUEST_PARAMS.EXT}\}`, ext);

export default {
  ...hsJsonApi,
  composeAssetSource,
};
