import * as React from 'react';
import { composeClassname } from '../../common/utils';
import { IComponentProps } from '../../common/models/App.model';
import { cardSetETL } from '../../common/models/Cards.model';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

interface ISetSelectorProps extends IComponentProps {}

interface ISetSelectorStateProps {
  collectionSetFilterAction: (key: string, value: string) => any;
  sets: string[];
}

type Props = ISetSelectorProps & ISetSelectorStateProps;

type State = {
  activeSetName: string;
};

class SetSelector extends React.Component<Props, State> {
  state = {
    activeSetName: 'NONE',
  };

  handleSetChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ activeSetName: event.target.value });
  }

  render() {
    return (
      <Select
        onChange={this.handleSetChange}
        value={this.state.activeSetName}
        inputProps={{
          name: 'set',
          id: 'select-set',
        }}
        className={composeClassname('Collection-set-selector')(this.props.className)}>
        <MenuItem value="NONE">Show All Cards</MenuItem>
        { this.props.sets.map(set => <MenuItem value={set}>{cardSetETL[set]}</MenuItem>) }
      </Select>
    );
  }
}

export default SetSelector;
