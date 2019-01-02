import * as React from 'react';
import { composeClassname } from '../../common/utils';
import { IComponentProps } from '../../common/models/App.model';
import { CardSet, cardSetETL } from '../../common/models/Cards.model';
import APP from '../../common/constants/app';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

interface ISetSelectorProps extends IComponentProps {}

interface ISetSelectorStateProps {
  collectionSetFilterAction: (key: string, value: string | string[]) => any;
  sets: string[];
}

type Props = ISetSelectorProps & ISetSelectorStateProps;

type State = { set: string };

class SetSelector extends React.Component<Props, State> {
  state = { set: CardSet.NONE };

  handleSetChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const set = event.target.value;
    this.setState({ set });
    this.props.collectionSetFilterAction(APP.COLLECTION.FILTERS.SET, set);
  }

  render() {
    return (
      <Select
        onChange={this.handleSetChange}
        value={this.state.set}
        inputProps={{
          name: 'set',
          id: 'select-set',
        }}
        className={composeClassname('Collection-set-selector')(this.props.className)}>
        <MenuItem value={CardSet.NONE}>Show All Cards</MenuItem>
        { this.props.sets.map(set =>
          <MenuItem
            key={`set-selector-${set}`}
            value={set}>
            {cardSetETL[set]}
          </MenuItem>
        )}
      </Select>
    );
  }
}

export default SetSelector;
