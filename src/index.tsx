import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';

const root = document.getElementById('root');
render(
	<Router>
		<App />
	</Router>,
	root
);
