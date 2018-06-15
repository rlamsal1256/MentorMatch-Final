import React from 'react';
import { render } from 'react-dom';
import './styles/base.css';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import { store, history } from './redux/store';

render((
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path="/" component={App} />
            </Switch>
        </Router>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();