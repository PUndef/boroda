import React from 'react';
import { connect } from 'react-redux';
import AddTodo from './components/AddTodo';
import { Footer } from './components';
import VisibleTodoList from './components/VisibleTodoList';

const mapStateToProps = state => ({ ...state });

const Todo = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default connect(mapStateToProps)(Todo);
