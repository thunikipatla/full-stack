import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectbook} from '../actions/index';

class BooksList extends React.Component{

    renderList(){
        let bookslist = this.props.books.map((book)=>{
            return <li onClick={()=> {this.props.selectbook(book)}}
            key={book.name}>
                {book.name}   {book.author}
            </li>
        })
        return bookslist;

    }

    render(){
        // console.log(this.props);
        return(
            <div>
                <h3>Books List</h3>
                
                <ul>
                {this.renderList()}
                </ul>
                
            </div>
        )
    }
}

function mapstatetoprops(state){
    // console.log('booksList state', state);
    return {books:state.books}
}

function bindactiontoprops(dispatch){
   return bindActionCreators({selectbook:selectbook},dispatch);
}

export default connect(mapstatetoprops,bindactiontoprops)(BooksList);