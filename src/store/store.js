/* global window */
import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import rootReducer from './rootReducer';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
const store = createStore(
    rootReducer,
    persistedState,
);

store.subscribe(throttle(() => {
    saveState({
        todoList: store.getState().todoList,
    });
}, 1000));

window.store = store;

export default store;
