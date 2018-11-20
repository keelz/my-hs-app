import * as React from 'react';
import App from './App';
import LoadingAnimation from '../LoadingAnimation';

// redux props.
type IAppStateProps = {
  loaded: boolean;
  appDidLoadAction: () => any;
};

class Index extends React.Component<IAppStateProps> {
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
