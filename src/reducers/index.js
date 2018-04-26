import { combineReducers } from 'redux';
import studentsReducer from './studentsReducer';

const reducerApp = combineReducers({
    studentsReducer,
})

export default reducerApp;