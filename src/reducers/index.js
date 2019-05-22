import {combineReducers} from 'redux'
import itemReducer from './itemReducer';
import logReducer from './logReducer';

export default combineReducers({
    items:itemReducer,
    texts:logReducer
})