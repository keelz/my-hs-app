import * as React from 'react';
import { composeClassname } from '../../common/utils';
import { ICollection } from '../../common/models/collection.model';
import BodyNavButton from './BodyNavButton';
import Card from '../Card';
import {
  IComponentProps,
  BlockOrientation,
  IPagination,
} from '../../common/models/app.model';
import {
  CardResolution,
  CardExt,
  CardLocale,
  ICard,
} from '../../common/models/cards.model';

/**
 * MODEL
 */
interface ICollectionBodyProps extends IComponentProps {
  collection: ICollection;
}

export interface ICollectionBodyStateProps {
  pagination: IPagination;
  setPagination: (pagination: IPagination) => any;
}

type Props = ICollectionBodyProps & ICollectionBodyStateProps;

/**
 * HELPERS
 */
export const composeCollection = (withCards: ICard[], pagination: IPagination): ICard[] =>
  withCards.slice(
    pagination.itemsPerPage * pagination.currentPage,
    (pagination.itemsPerPage * pagination.currentPage) + pagination.itemsPerPage
  );

/**
 * COMPONENT
 */
const CollectionBody: React.SFC<Props> = props =>
  <div className={composeClassname('Collection-body')(props.className)}>
    <BodyNavButton
      active={props.pagination.currentPage > 0}
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
      active={props.pagination.currentPage + 1 < props.pagination.pages}
      align={BlockOrientation.RIGHT}
      onClick={() => props.setPagination({
        ...props.pagination,
        currentPage: props.pagination.currentPage + 1,
      })} />
  </div>;

export default CollectionBody;
