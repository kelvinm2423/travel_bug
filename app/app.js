import React from 'react';
import { BrowserRouter, Route, Switch, history } from 'react-router-dom';
// import WelcomeScreen from './components/welcome.js';
import ReactDOM from 'react-dom';
import NewUser from './components/new.js';
import Main from './components/Main.js';


ReactDOM.render(
    <BrowserRouter history={history}>
       
            <Switch>
                <Route exact path="/" component={NewUser} />
             <Route exact path="/welcome" component={Main} />
            </Switch>
   
    </BrowserRouter>,
    document.getElementById("app")
);