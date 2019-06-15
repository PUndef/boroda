import { combineReducers } from 'redux';
import { todoList } from '../services/todoList';
import { visibilityFilter } from '../services/visibilityFilter';

export default combineReducers({
    todoList,
    visibilityFilter,
});
