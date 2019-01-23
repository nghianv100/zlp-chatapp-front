import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'antd/dist/antd.css';
import './css/style.scss';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
