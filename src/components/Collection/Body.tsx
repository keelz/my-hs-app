import * as React from 'react';
import { composeClassname } from '../../common/utils';
import { MODAL_STATE } from '../../redux/Types';
import BodyNavButton from './BodyNavButton';
import Card from '../Card';
import CardDetail from './CardDetail';
import Modal from '../Modal';
import {
  BlockOrientation,
  IComponentProps,
  IPagination,
} from '../../common/models/App.model';
import {
  CardResolution,
  CardExt,
  CardLocale,
  ICard,
} from '../../common/models/Cards.model';

interface ICollectionBodyProps extends IComponentProps {}

export interface ICollectionBodyStateProps {
  activeCard?: ICard;
  cards: ICard[];
  modalState: MODAL_STATE;
  pagination: IPagination;
  setActiveCard: (activeCard: ICard) => any;
  setModalState: (modalState: MODAL_STATE) => any;
  setPagination: (pagination: IPagination) => any;
}

type Props = ICollectionBodyProps & ICollectionBodyStateProps;

export const toggleModal = (withProps: Props) => (withCard?: ICard) => () => {
  withCard && withProps.setActiveCard(withCard);
  const nextModalState = withProps.modalState === MODAL_STATE.OPEN
    ? MODAL_STATE.CLOSED
    : MODAL_STATE.OPEN;
  withProps.setModalState(nextModalState);
};

const CollectionBody: React.SFC<Props> = props =>
  <div className={composeClassname('Collection-body shadow-md')(props.className)}>
    <BodyNavButton
      active={props.pagination.currentPage > 0}
      align={BlockOrientation.LEFT}
      onClick={() => props.setPagination({
        ...props.pagination,
        currentPage: props.pagination.currentPage - 1,
      })} />
    { props.cards.map(card => {
      return (
        <Card
          className="Collection-card"
          key={card.id}
          ext={CardExt.PNG}
          id={card.id}
          locale={CardLocale.EN}
          onClick={toggleModal(props)(card)}
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
      onCloseCallback={toggleModal(props)()}
      open={props.modalState}
      render={() => <CardDetail card={props.activeCard} />} />
  </div>;

export default CollectionBody;
