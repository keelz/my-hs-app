import * as React from 'react';
import { IComponentProps, BlockOrientation, IPagination } from '../../common/models/app.model';
import { composeClassname } from '../../common/utils';
import { ICollection } from '../../common/models/collection.model';
import BodyNavButton from './BodyNavButton';
import Card from '../Card';
import {
  CardResolution,
  CardExt,
  CardLocale,
  ICard,
} from '../../common/models/cards.model';

interface ICollectionBodyProps extends IComponentProps {
  collection: ICollection;
}

export interface ICollectionBodyStateProps {
  pagination: IPagination;
  setPagination: (pagination: IPagination) => any;
}

type Props = ICollectionBodyProps & ICollectionBodyStateProps;

export const composeCollection = (withCards: ICard[], pagination: IPagination): ICard[] =>
  withCards.slice(
    pagination.itemsPerPage * pagination.currentPage,
    (pagination.itemsPerPage * pagination.currentPage) + pagination.itemsPerPage
  );

const CollectionBody: React.SFC<Props> = props =>
  <div className={composeClassname('Collection-body')(props.className)}>
    <BodyNavButton
      align={BlockOrientation.LEFT}
      onClick={() => props.setPagination({
        ...props.pagination,
        currentPage: props.pagination.currentPage - 1,
      })} />
    { composeCollection(props.collection.cards, props.pagination).map(card =>
      <Card
        className="Collection-card"
        key={card.id}
        ext={CardExt.PNG}
        id={card.id}
        locale={CardLocale.EN}
        resolution={CardResolution.SMALL} />
    )}
    <BodyNavButton
      align={BlockOrientation.RIGHT}
      onClick={() => props.setPagination({
        ...props.pagination,
        currentPage: props.pagination.currentPage + 1,
      })} />
  </div>;

export default CollectionBody;
