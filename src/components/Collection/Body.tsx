import * as React from 'react';
import Card from '../Card';
import { ICollection } from '../../common/models/Collection';
import { IComponentProps } from '../../common/models/App';
import { composeClassname } from '../../common/utils';
import {
  CardResolution,
  CardExt,
  CardLocale,
} from '../../common/models/Card';

interface ICollectionBodyProps extends IComponentProps {
  collection: ICollection;
}

const CollectionBody: React.SFC<ICollectionBodyProps> = props =>
  <div className={composeClassname('Collection-body')(props.className)}>
    { props.collection.cards.map(card =>
      <Card
        className="Collection-card"
        key={card.id}
        ext={CardExt.PNG}
        id={card.id}
        locale={CardLocale.EN}
        resolution={CardResolution.SMALL} />)
    }
  </div>;

export default CollectionBody;
