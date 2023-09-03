import React from 'react';
import ReactDOM from 'react-dom/client';

import Framework7 from 'framework7/lite/bundle';
import Framework7React from 'framework7-react';

import 'material-icons/iconfont/material-icons.css';
import './styles/index.css';

import AppMain from './pages/AppMain';


Framework7.use(Framework7React);

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <AppMain/>
  </React.StrictMode>,
)
