import * as React from 'react';
import { IComponentProps } from '../../common/models/app.model';
import { composeClassname } from '../../common/utils';
import { ICard } from '../../common/models/cards.model';

interface ICardDetailProps extends IComponentProps {
  card?: ICard;
}

const CardDetail: React.SFC<ICardDetailProps> = props =>
  <div className={composeClassname('Card-detail')(props.className)}>
    <p>hi there bright eyes</p>
    { props.card &&
      <div>{props.card.id}</div>
    }
  </div>;

export default CardDetail;
