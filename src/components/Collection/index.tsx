import * as React from 'react';
import { ICollection } from '../../common/models/collection.model';
import { CardClassName } from '../../common/models/cards.model';
import { IComponentProps, IPagination } from '../../common/models/app.model';
import CollectionBody from '../../redux/containers/Collection/Body';
import CollectionHeader from './Header';
import './Collection.css';

interface ICollectionProps extends IComponentProps {}

/**
 * MODEL
 */
export interface ICollectionStateProps {
  activeCardClassName: CardClassName;
  collection: ICollection;
  setPagination: (pagination: IPagination) => any;
}

type Props = ICollectionProps & ICollectionStateProps;

const CARDS_PER_PAGE = 10;

/**
 * HELPERS
 */
export const handleComponentShouldUpdate = (nextProps: Props, props: Props): boolean => {
  const nextCollection = nextProps.collection;
  const { collection } = props;
  if (nextCollection.cards.length === collection.cards.length) {
    if (nextCollection.cards[0] !== collection.cards[0]) {
      setPagination(nextCollection)(props.setPagination);
      return true;
    }
    return false;
  }
  setPagination(nextProps.collection)(props.setPagination);
  return true;
};

export const composePagination = (withCollection: ICollection): IPagination => {
  const total = withCollection.cards.length;
  const pages = Math.ceil(total / CARDS_PER_PAGE);
  const itemsPerPage = CARDS_PER_PAGE;
  return { itemsPerPage, pages, total, currentPage: 0 };
};

export const setPagination = (withCollection: ICollection) =>
  (set: (pagination: IPagination) => any) => {
    const pagination = composePagination(withCollection);
    set(pagination);
  };

/**
 * COMPONENT
 */
class Collection extends React.Component<Props> {
  componentDidMount() {
    setPagination(this.props.collection)(this.props.setPagination);
  }

  shouldComponentUpdate(nextProps: Props) {
    debugger;
    return handleComponentShouldUpdate(nextProps, this.props);
  }

  render() {
    return (
      <div className="Collection">
        <CollectionHeader />
        <CollectionBody collection={this.props.collection} />
      </div>
    );
  }
}

export default Collection;
