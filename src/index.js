import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
//import App from './components/App';
import BadgeNewPractice from './pages/BadgeNewPractice';

const container = document.getElementById('app');

ReactDOM.render(
/* <BadgePractice 
    firstName="Diego"
    lastName="Duran"
    avatarUrl="https://s.gravatar.com/avatar/9bb8b6a4633c33326489618691b5de08?s=80"
    jobTitle="Web developer"
    twitter="@diegodurand6"
/>, */
<BadgeNewPractice />,
container);
 