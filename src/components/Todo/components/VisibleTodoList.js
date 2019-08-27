import React from 'react';
import { connect } from 'react-redux';
import { TodoList } from '.';
import { getVisibleTodos } from '../../../services/todo';

const mapStateToProps = state => ({
    todos: getVisibleTodos(
        state.todoList,
        state.visibilityFilter,
    ),
});

const mapDispatchToProps = dispatch => ({
    onTodoClick: (id) => {
        dispatch({
            type: 'TOGGLE_TODO',
            id,
        });
    },
});

const connectDecorator = connect(
    mapStateToProps,
    mapDispatchToProps,
);

class VisibleTodoList extends React.Component {
    render() {
        const { props } = this;
        const { todos, onTodoClick } = props;
        return (
            <TodoList
                todos={todos}
                onTodoClick={onTodoClick}
            />
        );
    }
}

export default connectDecorator(VisibleTodoList);
