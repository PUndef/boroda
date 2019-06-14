import React from 'react';
import { createStore, combineReducers } from 'redux';
import logo from './logo.svg';
import './App.css';
import { todos, visibilityFilter } from './components/ToDo/List';

const todoApp = combineReducers({
    todos,
    visibilityFilter,
});

const store = createStore(todoApp);
console.log('Initial state:');
console.log(store.getState());
console.log('--------');

console.log('Dispatching ADD_TODO');
store.dispatch({
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux',
});

console.log('Current state:');
console.log(store.getState());
console.log('--------');

console.log('Dispatching ADD_TODO');
store.dispatch({
    type: 'ADD_TODO',
    id: 1,
    text: 'Go shopping',
});

console.log('Current state:');
console.log(store.getState());
console.log('--------');

console.log('Dispatching TOGGLE_TODO');
store.dispatch({
    type: 'TOGGLE_TODO',
    id: 0,
});

console.log('Current state:');
console.log(store.getState());
console.log('--------');

console.log('Dispatching SET_VISIBILITY_FILTER');
store.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter: 'SHOW_COMPLETED',
});

console.log('Current state:');
console.log(store.getState());
console.log('--------');

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    {'Edit '}
                    <code>src/App.js</code>
                    {' and save to reload.'}
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {'Learn React'}
                </a>
            </header>
        </div>
    );
}

export default App;
