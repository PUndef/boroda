import React from 'react';
import { store } from '../../../store';
import { TodoList } from '.';
import { getVisibleTodos } from '../../../services/todo';

class VisibleTodoList extends React.Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const state = store.getState();
        const todos = getVisibleTodos(state.todoList, state.visibilityFilter);
        return (
            <TodoList
                todos={todos}
                onTodoClick={
                    (id) => {
                        store.dispatch({
                            type: 'TOGGLE_TODO',
                            id,
                        });
                    }
                }
            />
        );
    }
}

export default VisibleTodoList;
