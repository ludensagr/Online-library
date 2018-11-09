import books from './books.json'
import * as R from 'ramda'

export const fetchBooks = async () => {
    return new Promise(resolve => {
        resolve(books)
    })
}

export const fetchBookById = async id => {
    return new Promise((resolve, reject) => {
        const book = R.find(R.propEq('id', id), books)    //Поиск книги с переданным айди
        resolve(book)
    })
}