import './main.scss'
import 'babel-polyfill';
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from "react-redux"

import reducers from './reducers';
import Layout from './containers/layout'
import Books from './containers/books'
import Book from './containers/book'

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
));

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={Layout}>
                <Route path="/" component={Books}/>
                <Route path="books" component={Books}/>
            </Route>
            <Route path='books/:id' component={Book} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
