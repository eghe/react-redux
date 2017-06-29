import React from 'react';
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class BookList extends React.Component {

  renderBooks() {
    return (
      this.props.books.map(book => {
        return (
          <li
            key={book.title}
            className="list-group-item"
            onClick = {() => this.props.selectBook(book)}
          > {book.title} </li>
        );
      })
    );
  }

  render() {
      console.log("Aaa");
      console.log(this.props.books);
      return (
          <ul className="list-group col-sm-4">
            {this.renderBooks()}
          </ul>
      );
  }

};

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { selectBook: selectBook}, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
