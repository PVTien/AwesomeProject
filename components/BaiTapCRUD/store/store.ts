import {createStore, combineReducers} from 'redux';
import userReducer from './userReducer';
import calculatorReducer from '../../appCalculator/store/calculatorReducer';

const allReducers = combineReducers({
  userReducer,
  calculatorReducer,
});
const store = createStore(allReducers);

export default store;
