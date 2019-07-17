import React from 'react';
import uuidv1 from 'uuid/v1';
import { connect } from 'react-redux';
import store from '../../store/store';
import AddTodo from './components/AddTodo';
import { Footer } from './components';
import VisibleTodoList from './components/VisibleTodoList';

const mapStateToProps = state => ({ ...state });

const Todo = () => (
    <div>
        <AddTodo
            onAddClick={
                (text) => {
                    store.dispatch({
                        type: 'ADD_TODO',
                        id: uuidv1(),
                        text,
                    });
                }
            }
        />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default connect(mapStateToProps)(Todo);
