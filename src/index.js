import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

let store = configureStore();

ReactDOM.render(
  <LocaleProvider locale={enUS}>
    <Provider store={store}>
      <App />
    </Provider>
  </LocaleProvider>, document.getElementById('root'));
registerServiceWorker();
