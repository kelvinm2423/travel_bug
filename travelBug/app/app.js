import React from 'react';
import { BrowserRouter, Route, Switch, history } from 'react-router-dom';
// import WelcomeScreen from './components/welcome.js';
import ReactDOM from 'react-dom';
import Parent from './components/parent.js';
import Main from './components/main.js';

ReactDOM.render(

    <div>
    <Main />
  <Parent />
    </div>,
    document.getElementById("app")
);