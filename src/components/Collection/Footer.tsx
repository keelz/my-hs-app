import * as React from 'react';
import { IComponentProps } from '../../common/models/App.model';
import { composeClassname } from '../../common/utils';
import ManaBar from '../../redux/containers/Collection/ManaBar';
import PlayStyle from '../../redux/containers/Collection/PlayStyle';
import SetSelector from '../../redux/containers/Collection/SetSelector';

interface ICollectionFooterProps extends IComponentProps {}

export interface ICollectionFooterStateProps {}

type Props = ICollectionFooterProps & ICollectionFooterStateProps;

const CollectionFooter: React.SFC<Props> = props =>
  <div
    className={composeClassname([
      'Collection-footer',
      'flex',
    ])(props.className)}>
    <PlayStyle />
    <ManaBar />
    <SetSelector />
  </div>;

export default CollectionFooter;
