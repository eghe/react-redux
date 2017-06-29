import { combineReducers } from 'redux';

import BooksReducer from './reducer-books'
import ActiveBook from './reducer-active-book'

const rootReducer = combineReducers({
  books: BooksReducer,
  selected: ActiveBook
});

export default rootReducer;
