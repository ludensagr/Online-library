import * as R from 'ramda'
import {
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOK_BY_ID_SUCCESS
} from '../actionTypes'

const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_BOOKS_SUCCESS:
            const newValues = R.indexBy(R.prop('id'), payload)   //Вызов Ramda и установка id как ключ объекта константы newVales у наших данных
            return R.merge(state, newValues)
        case FETCH_BOOK_BY_ID_SUCCESS:
            return R.assoc(payload.id, payload, state)                //добавляем полученные данные в объект (либо перезаписываем, если есть)
        default:
            return state;
    }
}

