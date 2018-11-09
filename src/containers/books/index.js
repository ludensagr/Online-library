import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router'

import {fetchBooks} from '../../actions'
import {getBooks} from '../../selectors'

class Books extends Component {
    componentDidMount () {           //Жизненный цикл компонента,
        this.props.fetchBooks()     // фетчим все данные тут
    }

    static renderBook (book, index) {     //Выводит каждую книгу из списка
       return (
           <div className='col-sm-4 col-lg-4 col-md-4 book-list' key={index}>        {/*разметка 1 книги*/}
                <div className='thumbnail'>
                    <img className='img-thumbnail'          //Отображаем обложку книги
                         src={book.image}
                         alt={book.name}
                         />
                    <div className='caption'>
                        <h4>
                            <Link to={`/books/${book.id}`}>     {/*Ссылка на отдельную страницу книги*/}
                                {book.name}
                            </Link>
                        </h4>
                        <p>{book.autor}</p>         {/*Вывод автора 2 строчкой*/}
                        <p className='itemButton'>
                            <Link to={`/books/${book.id}`}
                                  className='btn btn-primary'>      {/*Кнопка с подробным описанием*/}
                              Подробное описание.
                            </Link>
                        </p>
                    </div>
                </div>
           </div>
       )
    };

    render () {
        const {books} = this.props;
        return (
            <div>
            <div className="books row">
                {books.map((book, index) => Books.renderBook(book, index))} {/*вызываем функцию и передаём туда значения book и index*/}
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ //тут мы будем получать книги
    books: getBooks(state)        //выносим поиск элементов в отдельный файл селектор
});
const mapDispatchToProps = {
    fetchBooks              //Описываем константу с экшеном

};
export default connect(mapStateToProps, mapDispatchToProps)(Books)