import * as React from 'react';
import { composeClassname } from '../../common/utils';
import { ICollection } from '../../common/models/collection.model';
import BodyNavButton from './BodyNavButton';
import Card from '../Card';
import CardDetail from './CardDetail';
import Modal from '../Modal';
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

interface ICollectionBodyState {
  activeCard?: ICard;
  modalOpen: boolean;
}

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
class CollectionBody extends React.Component<Props, ICollectionBodyState> {
  state = {
    activeCard: undefined,
    modalOpen: false,
  };

  handleToggleModal = (withCard: any) => () =>
    this.setState({ modalOpen: !this.state.modalOpen, activeCard: withCard })

  render() {
    return (
      <div className={composeClassname('Collection-body shadow-md')(this.props.className)}>
        <BodyNavButton
          active={this.props.pagination.currentPage > 0}
          align={BlockOrientation.LEFT}
          onClick={() => this.props.setPagination({
            ...this.props.pagination,
            currentPage: this.props.pagination.currentPage - 1,
          })} />
        { composeCollection(this.props.collection.cards, this.props.pagination).map(card =>
          <Card
            className="Collection-card"
            key={card.id}
            ext={CardExt.PNG}
            id={card.id}
            locale={CardLocale.EN}
            onClick={this.handleToggleModal(card)}
            resolution={CardResolution.SMALL} />
        )}
        <BodyNavButton
          active={this.props.pagination.currentPage + 1 < this.props.pagination.pages}
          align={BlockOrientation.RIGHT}
          onClick={() => this.props.setPagination({
            ...this.props.pagination,
            currentPage: this.props.pagination.currentPage + 1,
          })} />
        <Modal
          onCloseCallback={this.handleToggleModal(this.state.activeCard)}
          open={this.state.modalOpen}
          render={() => <CardDetail card={this.state.activeCard} />}
          />
      </div>
    );
  }
}

export default CollectionBody;
