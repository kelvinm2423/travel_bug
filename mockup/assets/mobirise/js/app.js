
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
// import Main from './components/Login';
import Forum from './components/Forum';
import { BrowserRouter, Route, Switch, history } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter history={history}>
        <Switch>
            <Route exact path="/" component={Main} />
            {/* <Route exact path="/login" component={Login} /> */}
            <Route exact path="/forum" component={Forum} />
        </Switch>
    </BrowserRouter>,
    document.getElementById("app")
);