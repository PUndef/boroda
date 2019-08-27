import React from 'react';
import AddTodo from './components/AddTodo';
import { Footer } from './components';
import VisibleTodoList from './components/VisibleTodoList';

const Todo = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default Todo;
