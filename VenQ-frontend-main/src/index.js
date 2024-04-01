import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import Dummy from './components/dashboard/property/Dummy';
import AddContentPopup from './components/AdminForm/Popup';
import YourMainComponent from './components/AdminForm/Main';
import Verification from './components/signup/Verification';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <App/>
    </Provider>
);
