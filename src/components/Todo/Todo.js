import React from 'react';
import uuidv1 from 'uuid/v1';
import { connect } from 'react-redux';
import store from '../../store/store';
import AddTodo from './components/AddTodo';
import { getVisibleTodos } from '../../services/todo';
import { TodoList, Footer } from './components';

const mapStateToProps = state => ({ ...state });

class Todo extends React.Component {
    render() {
        const { props } = this;
        const {
            todoList,
            visibilityFilter,
        } = props;
        return (
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
    }
}

export default connect(mapStateToProps)(Todo);
