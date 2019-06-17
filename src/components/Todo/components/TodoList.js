import React from 'react';
import { TodoItem } from '.';

class TodoList extends React.PureComponent {
    render() {
        const { props } = this;
        const { todos, onTodoClick } = props;
        return (
            <ul>
                {
                    todos.map(todo => (
                        <TodoItem
                            key={todo.id}
                            {...todo}
                            onClick={
                                () => {
                                    onTodoClick(todo.id);
                                }
                            }
                        />
                    ))
                }
            </ul>
        );
    }
}

export default TodoList;
