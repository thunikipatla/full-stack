import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectbook} from '../actions/index';

class BooksList extends React.Component{
    renderList(){
        var bookslist = this.props.books.map((book)=>{
        return <li onClick={()=>{this.props.selectbook(book)}} key={book.bookname}>{book.bookname} {book.author}</li>
        })
        return bookslist;
    }
    render(){
        console.log(this.props);
        return(
            <div>
                <h3>Books list</h3>
                {this.renderList()}
            </div>
        )
    }
}

function mapstatetoprops(state){
    console.log('bookslist', state);
    return {books: state.book}
}

function mapactiontostate(dispatch){
    return bindActionCreators({selectbook:selectbook}, dispatch);
}

export default connect(mapstatetoprops,mapactiontostate)(BooksList);