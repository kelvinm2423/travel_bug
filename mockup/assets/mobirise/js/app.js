
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
// import Main from './components/Login';
import Forum from './components/Forum';
// import { BrowserRouter, Route, Switch, history } from 'react-router-dom';

ReactDOM.render(
		<div>
			<Main />
			<Forum />
		</div>,
		document.getElementById('app')
	);
