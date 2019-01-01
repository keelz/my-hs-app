import * as React from 'react';
import { composeClassname } from '../../common/utils';
import { ICollection } from '../../common/models/Collection.model';
import { MODAL_STATE } from '../../redux/Types';
import BodyNavButton from './BodyNavButton';
import Card from '../Card';
import CardDetail from './CardDetail';
import Modal from '../Modal';
import {
  IComponentProps,
  BlockOrientation,
  IPagination,
} from '../../common/models/App.model';
import {
  CardResolution,
  CardExt,
  CardLocale,
  ICard,
} from '../../common/models/Cards.model';

/**
 * MODEL
 */
interface ICollectionBodyProps extends IComponentProps {
  collection: ICollection;
}

export interface ICollectionBodyStateProps {
  activeCard?: ICard;
  modalState: MODAL_STATE;
  pagination: IPagination;
  setActiveCard: (activeCard: ICard) => any;
  setModalState: (modalState: MODAL_STATE) => any;
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

export const composeToggleModal = (withProps: Props) => (withCard?: ICard) => () => {
  withCard && withProps.setActiveCard(withCard);
  const nextModalState = withProps.modalState === MODAL_STATE.OPEN
    ? MODAL_STATE.CLOSED
    : MODAL_STATE.OPEN;
  withProps.setModalState(nextModalState);
};

/**
 * COMPONENT
 */
const CollectionBody: React.SFC<Props> = props => {
  const closeModal = composeToggleModal(props)();
  return (
    <div className={composeClassname('Collection-body shadow-md')(props.className)}>
      <BodyNavButton
        active={props.pagination.currentPage > 0}
        align={BlockOrientation.LEFT}
        onClick={() => props.setPagination({
          ...props.pagination,
          currentPage: props.pagination.currentPage - 1,
        })} />
      { composeCollection(props.collection.cards, props.pagination).map(card => {
        const openModal = composeToggleModal(props)(card);
        return (
          <Card
            className="Collection-card"
            key={card.id}
            ext={CardExt.PNG}
            id={card.id}
            locale={CardLocale.EN}
            onClick={openModal}
            resolution={CardResolution.SMALL} />
        );
      })}
      <BodyNavButton
        active={props.pagination.currentPage + 1 < props.pagination.pages}
        align={BlockOrientation.RIGHT}
        onClick={() => props.setPagination({
          ...props.pagination,
          currentPage: props.pagination.currentPage + 1,
        })} />
      <Modal
        onCloseCallback={closeModal}
        open={props.modalState}
        render={() => <CardDetail card={props.activeCard} />}
        />
    </div>
  );
};

export default CollectionBody;
