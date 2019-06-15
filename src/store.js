import { createStore, combineReducers } from 'redux';
import { todoList } from './services/todoList';
import { visibilityFilter } from './services/visibilityFilter';

const allStore = combineReducers({
    todoList,
    visibilityFilter,
});

const store = createStore(allStore);

export default store;
