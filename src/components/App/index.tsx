import * as React from 'react';
import App from './App';

// implementation props
type AppProps = {};

// state props
type AppStateProps = {
  loaded: boolean;
  appDidLoadAction: () => any;
};

// composed props
type Props = AppProps & AppStateProps;

class Index extends React.Component<Props> {
  componentDidMount() {
    this.props.appDidLoadAction();
  }

  render() {
    return (
      <div>
        { this.props.loaded
          ? <App />
          : <div>App is Loading</div>
        }
      </div>
    );
  }
}

export default Index;
