import * as React from 'react';
import { IComponentProps, BlockOrientation } from '../../common/models/app.model';
import { composeClassname } from '../../common/utils';
import { ICollection } from '../../common/models/collection.model';
import BodyNavButton from './BodyNavButton';
import Card from '../Card';
import {
  CardResolution,
  CardExt,
  CardLocale,
} from '../../common/models/cards.model';

interface ICollectionBodyProps extends IComponentProps {
  collection: ICollection;
}

const CollectionBody: React.SFC<ICollectionBodyProps> = props =>
  <div className={composeClassname('Collection-body')(props.className)}>
    <BodyNavButton align={BlockOrientation.LEFT} />
    { props.collection.cards.map(card =>
      <Card
        className="Collection-card"
        key={card.id}
        ext={CardExt.PNG}
        id={card.id}
        locale={CardLocale.EN}
        resolution={CardResolution.SMALL} />
    )}
    <BodyNavButton align={BlockOrientation.RIGHT} />
  </div>;

export default CollectionBody;
