/* global window */
import { createStore } from 'redux';
import { rootReducer } from '.';


const store = createStore(rootReducer);
window.store = store;

export default store;
