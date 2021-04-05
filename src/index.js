import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import App from './components/App';
import BadgePractice from './components/BadgePractice';

const container = document.getElementById('app');

ReactDOM.render(<BadgePractice />, container);
 