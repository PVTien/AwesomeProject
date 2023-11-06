import {createStore, combineReducers} from 'redux';
import userReducer from './userReducer';

const allReducers = combineReducers({
  userReducer,
});
const store = createStore(allReducers);

export default store;
