import { combineReducers } from 'redux';
import { todoList } from '../services/todoList';
import { visibilityFilter } from '../services/visibilityFilter';

const rootReducer = combineReducers({
    todoList,
    visibilityFilter,
});

export default rootReducer;
