import { combineReducers } from 'redux';
import productreducer from './reducer_products';
import Activeproduct from './reducer_activeproduct';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  products: productreducer,
  Activeproduct: Activeproduct
});

export default rootReducer;
