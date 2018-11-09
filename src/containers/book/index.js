import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router'

import {fetchBookById} from '../../actions'
import {getBookById} from "../../selectors";

class Book extends Component {
    componentDidMount () {
        this.props.fetchBookById(this.props.params.id)   //Фетчим книгу, получаем id
    }
    renderContent () {
        const {book} = this.props;
        return (
            <div className='thumbnail'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img
                            className='img-thumbnail'           //Изображение книги
                            src={book.image}
                            alt={book.name}
                        />
                    </div>
                    <div className='col-md-6'>
                        <h4>{book.autor}</h4>
                        <h2>{book.name}</h2>
                        <p>Жанр:{book.genre}</p>
                        <p>Год:{book.year}</p>
                        <p>Описание книги:{book.about}</p>

                    </div>
                </div>
            </div>
        )
    }

    renderSidebar () {
        return (
            <div>
                <Link to='/' className='btn btn-info btn-block' styleName="width:200px;height:75px">На главную</Link>
            </div>
        )
    }

    render () {
        const {book} = this.props;
        return (
            <div className='view-container'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-9'>
                            {book && this.renderContent()}
                        </div>
                        <div className='col-md-3'>
                            {book && this.renderSidebar()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    book: getBookById(state, state.bookPage.id)             //Выбор по айди страницы книги
});

const mapDispatchToProps = {
    fetchBookById
};

export default connect(mapStateToProps, mapDispatchToProps)(Book)
