import React from 'react';
import './App.css';
import { Home } from './scenes/Home';

import store from './store';

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
            <Home />
        </div>
    );
}

export default App;
