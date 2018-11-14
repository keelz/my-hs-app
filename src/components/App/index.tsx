import * as React from 'react';
import App from './App';

type AppProps = {};

type AppStateProps = {
  loaded: boolean;
  appDidLoadAction: () => any;
};

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
