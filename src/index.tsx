import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faHeart,
  faBookmark,
  faStar,
  faList,
  faMinusSquare,
  faTrashAlt,
  faSearch,
  faVideo,
  faEraser,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  fab,
  faHeart,
  faBookmark,
  faStar,
  faList,
  faMinusSquare,
  faTrashAlt,
  faSearch,
  faVideo,
  faEraser,
  faBars
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
