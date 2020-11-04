import { combineReducers } from 'redux';
import bookreducer from './reducer_book';
import activebook from './reducer_activebook';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  book: bookreducer,
  activebook: activebook
});

export default rootReducer;
