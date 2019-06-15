import React from 'react';
import { Provider } from 'react-redux';
import { Home } from './scenes/Home';
import { store } from './store';

import './App.css';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Home />
            </div>
        </Provider>
    );
}

export default App;
