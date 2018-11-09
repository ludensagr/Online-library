import * as R from 'ramda'

export const getBookById = (state, id) => R.prop(id,state.books); //возвращаем книгу из нашего объекта, если нету, то вернет null

export const getBooks = state => {                  //для нахождения в state необходимых данных
    const applySearch = item => R.contains(         //Функция получения item на вход и проверяет строку на вхождение в подстроку
        state.booksPage.search,
        R.prop('name', item)
    );

    const books = R.compose(        //чтобы использовать map + filter
        R.filter(applySearch),
        R.map(id => getBookById(state, id))
    )(state.booksPage.ids)

    return books
}
