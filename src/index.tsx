import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './common/assets/css/index.css';
import store from './redux/store';
import App from './redux/containers/App';
import registerServiceWorker from './registerServiceWorker';

export const RootComponent: React.SFC = () =>
  <Provider store={store}>
    <App />
  </Provider>;

ReactDOM.render(
  <RootComponent />,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
