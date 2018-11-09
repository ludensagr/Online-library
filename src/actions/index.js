import {                //Импорт экшенов из actionTypes.js
    FETCH_BOOKS_START,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_FAILURE,
    FETCH_BOOK_BY_ID_START,
    FETCH_BOOK_BY_ID_SUCCESS,
    FETCH_BOOK_BY_ID_FAILURE,
    SEARCH_BOOK
} from '../actionTypes'
import {
    fetchBooks as fetchBooksApi,
    fetchBookById as fetchBookByIdApi
} from '../api'

export const fetchBooks = () => async dispatch => {
    dispatch({type: FETCH_BOOKS_START});

    try {
        const books = await fetchBooksApi();
        dispatch({
            type: FETCH_BOOKS_SUCCESS,      //Описываем успех
            payload: books
        })
    } catch (err) {
        dispatch({
            type: FETCH_BOOKS_FAILURE,
            payload: err,                   //Описываем ошибку
            error: true
        })
    }

};

export const fetchBookById = id => async dispatch => {
    dispatch({type: FETCH_BOOK_BY_ID_START});

    try {
        const book = await fetchBookByIdApi(id)
        dispatch({
            type: FETCH_BOOK_BY_ID_SUCCESS,      //Описываем успех
            payload: book
        })
    } catch (err) {
        dispatch({
            type: FETCH_BOOK_BY_ID_FAILURE,
            payload: err,                   //Описываем ошибку
            error: true
        })
    }
};

export const searchBook = (text) => dispatch => {
    dispatch({
        type: SEARCH_BOOK,
        payload: text
    })
};