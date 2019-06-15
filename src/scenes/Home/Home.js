import React from 'react';
import Todo from '../../components/Todo/Todo';
import store from '../../store/store';

function Home() {
    return (
        <div>
            <Todo
                todoList={store.getState().todoList}
            />
        </div>
    );
}

export default Home;
