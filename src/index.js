import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {Router} from 'react-router';
import {history} from './helpers/routes/index';
import routes from './routes';

const app = document.getElementById('app');

ReactDOM.render(
    //use history wrapper instead of hashHistory
    <Router history={history} routes={routes}/>,
    app
);
