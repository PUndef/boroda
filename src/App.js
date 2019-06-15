import React from 'react';
import { Provider } from 'react-redux';
import { Home } from './scenes/Home';
import { store } from './store';

import styles from './App.module.scss';

function App() {
    return (
        <Provider store={store}>
            <div className={styles.App}>
                <Home />
            </div>
        </Provider>
    );
}

export default App;
