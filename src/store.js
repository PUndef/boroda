import { createStore, combineReducers } from 'redux';
import { todoList } from './services/todoList';
import { visibilityFilter } from './services/todo';

const allStore = combineReducers({
    todoList,
    visibilityFilter,
});

const store = createStore(allStore);

export default store;
