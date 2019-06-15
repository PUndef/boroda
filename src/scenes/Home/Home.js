import React from 'react';

import styles from './Home.scss';
import Todo from '../../components/Todo/Todo';
import store from '../../store/store';

function Home() {
    return (
        <div>
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
            <div>
                <Todo
                    todoList={store.getState().todoList}
                />
            </div>
        </div>
    );
}

export default Home;
