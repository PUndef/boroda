import React from 'react';

import styles from './Home.scss';

function Home() {
    return (
        <header className={styles.header}>
            <p>
                {'Edit '}
                <code>src/App.js</code>
                {' and save to reload.'}
            </p>
            <a
                className={styles.link}
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                {'Learn React'}
            </a>
        </header>
    );
}

export default Home;
