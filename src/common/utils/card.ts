import CARD from '../constants/card';

const cardSrcWithParameters = (
  id: string,
  locale: string,
  resolution: number,
  ext: string
) => CARD.BASE_URI + CARD.RENDER_PATH
  .replace('{LOCALE}', locale)
  .replace('{RESOLUTION}', resolution.toString())
  .replace('{ID}', id)
  .replace('{EXT}', ext);

export default {
  cardSrcWithParameters,
};
