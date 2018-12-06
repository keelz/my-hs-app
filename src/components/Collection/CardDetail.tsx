import * as React from 'react';
import * as classnames from 'classnames';
import { IComponentProps } from '../../common/models/app.model';
import { composeClassname } from '../../common/utils';
import { ICard, CardLocale, CardResolution, CardExt } from '../../common/models/cards.model';
import { composeAssetSource } from '../../common/services/hsJson.service';

interface ICardDetailProps extends IComponentProps {
  card?: ICard;
}

const CardDetail: React.SFC<ICardDetailProps> = props =>
  <div className={composeClassname([
    'App-card-detail',
    'flex',
    'flex-row'])(props.className)}>
    <div style={{ width: 340, backgroundColor: 'transparent' }}>
      <img style={{ marginTop: -60 }} src={composeAssetSource(
        props.card!.id,
        CardLocale.EN,
        CardResolution.LARGE,
        CardExt.PNG
      )} />
    </div>
    <div className={classnames([
      'bg-grey-darkest',
      'flex-grow',
      'rounded-lg',
      'shadow-outline',
      'text-white',
    ])} style={{ padding: 10, width: 300 }}>
      <h2>{props.card!.name}</h2>
      <p className="mt-2 mb-2">{props.card!.flavor}</p>
    </div>
  </div>;

export default CardDetail;
