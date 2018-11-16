import * as React from 'react';
import App from './App';
import LoadingAnimation from '../LoadingAnimation';

// implementation props.
type AppProps = {};

// redux props.
type AppStateProps = {
  loaded: boolean;
  appDidLoadAction: () => any;
};

// component props.
type Props = AppProps & AppStateProps;

class Index extends React.Component<Props> {
  componentDidMount() {
    this.props.appDidLoadAction();
  }

  render() {
    return (
      <div className="App container">
        { this.props.loaded
          ? <App />
          : <LoadingAnimation />
        }
      </div>
    );
  }
}

export default Index;
