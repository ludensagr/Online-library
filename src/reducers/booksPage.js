import {
    FETCH_BOOKS_SUCCESS,
    SEARCH_BOOK
} from "../actionTypes";
import * as R from "ramda";

const initialState = {
    ids: [],         //Тут будут храниться id наших книг
    search: ''         //Пустая строка поиска по дефолту
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_BOOKS_SUCCESS:
            return R.merge(state, {
            ids: R.pluck('id', payload)  //вытаскиваем все id телефонов и помещаем в массив ids
    });
        case SEARCH_BOOK:
            return R.merge(state, {
                search: payload
            })
        default:
            return state;
    }
}