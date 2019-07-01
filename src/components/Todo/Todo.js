import React from 'react';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';
import { connect } from 'react-redux';
import store from '../../store/store';
import AddTodo from './components/AddTodo';
import { getVisibleTodos } from '../../services/todo';
import { TodoList, Footer } from './components';

const mapStateToProps = state => ({ ...state });

const Todo = ({
    todoList,
    visibilityFilter,
}) => (
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
        <TodoList
            todos={
                getVisibleTodos(
                    todoList,
                    visibilityFilter,
                )
            }
            onTodoClick={
                (id) => {
                    store.dispatch({
                        type: 'TOGGLE_TODO',
                        id,
                    });
                }
            }
        />
        <Footer
            visibilityFilter={visibilityFilter}
            onFilterClick={
                (filter) => {
                    store.dispatch({
                        type: 'SET_VISIBILITY_FILTER',
                        filter,
                    });
                }
            }
        />
    </div>
);

Todo.propTypes = {
    todoList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    visibilityFilter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Todo);
