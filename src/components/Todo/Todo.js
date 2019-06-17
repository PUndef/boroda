import React from 'react';
import uuidv1 from 'uuid/v1';
import { connect } from 'react-redux';
import store from '../../store/store';
import FilterButton from '../FilterButton';
import { getVisibleTodos } from '../../services/todo';
import { TodoList } from './components';

import styles from './Todo.module.scss';

const mapStateToProps = state => ({ ...state });
const initInputValue = 'New todo';

class Todo extends React.Component {
    handleAddTodo = () => {
        store.dispatch({
            type: 'ADD_TODO',
            text: this.input.value,
            id: uuidv1(),
        });
        this.input.value = initInputValue;
    }

    handleToggleTodo = (id) => {
        store.dispatch({
            type: 'TOGGLE_TODO',
            id,
        });
    }

    render() {
        const { props } = this;
        const {
            todoList,
            visibilityFilter,
        } = props;
        const visibleTodos = getVisibleTodos(
            todoList,
            visibilityFilter,
        );
        return (
            <div>
                <input
                    ref={
                        (node) => {
                            this.input = node;
                        }
                    }
                />
                <button
                    type="button"
                    onClick={this.handleAddTodo}
                    className={styles.button}
                >
                    {'Add Todo'}
                </button>
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={this.handleToggleTodo}
                />
                <p>
                    {'Show:'}
                    {' '}
                    <FilterButton
                        filter="SHOW_ALL"
                        currentFilter={visibilityFilter}
                    >
                        {'All'}
                    </FilterButton>
                    {' '}
                    <FilterButton
                        filter="SHOW_ACTIVE"
                        currentFilter={visibilityFilter}
                    >
                        {'Active'}
                    </FilterButton>
                    {' '}
                    <FilterButton
                        filter="SHOW_COMPLETED"
                        currentFilter={visibilityFilter}
                    >
                        {'Completed'}
                    </FilterButton>
                </p>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Todo);
