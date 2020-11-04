import { combineReducers } from 'redux';
import Booksreducer from './reducer_book';
import Activebookreducer from './reducer_activebook';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  books: Booksreducer,
  activebook: Activebookreducer

});

export default rootReducer;
