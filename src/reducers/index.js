import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import books from './books';
import booksPage from './booksPage';
import bookPage from './bookPage'

export default combineReducers({
    routing: routerReducer,
    books,
    booksPage,
    bookPage
})