

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GifExpertApp from './GifExpertApp';



// const divApp = document.querySelector('#app');

ReactDOM.render(
  <GifExpertApp mensaje="GifExpertApp with ReactJs" />,
  document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

