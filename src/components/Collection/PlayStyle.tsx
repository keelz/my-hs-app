import * as React from 'react';
import { IComponentProps } from '../../common/models/App.model';
import { composeClassname } from '../../common/utils';

const wildIcon = require('../../common/assets/img/99px-wild_icon_large.png');
const standardIcon = require('../../common/assets/img/100px-standard_icon_large.png');

interface IPlayStyleProps extends IComponentProps {}

interface IPlayStyleStateProps {
  filters: { [field: string]: string };
  setFilter: (name: string, value: string) => any;
}

type Props = IPlayStyleProps & IPlayStyleStateProps;

const PlayStyle: React.SFC<Props> = props =>
  <div className={composeClassname([
    'Collection-play-style',
  ])(props.className)}>
    { props.filters['PLAY_STYLE'] === 'WILD'
      ? <img
        src={wildIcon}
        alt="wild-ico"
        onClick={() => props.setFilter('PLAY_STYLE', 'STANDARD')}
        title="Filter Standard Cards" />
      : <img
        src={standardIcon}
        alt="standard-ico"
        onClick={() => props.setFilter('PLAY_STYLE', 'WILD')}
        title="Filter Wild Cards" />
    }
  </div>;

export default PlayStyle;
