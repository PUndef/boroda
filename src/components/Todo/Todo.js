import React from 'react';
import uuidv1 from 'uuid/v1';
import { connect } from 'react-redux';
import store from '../../store/store';


const mapStateToProps = state => ({ ...state });

class Todo extends React.Component {
    handleAddTodo = () => {
        store.dispatch({
            type: 'ADD_TODO',
            text: 'Test',
            id: uuidv1(),
        });
    }

    render() {
        const { props } = this;
        return (
            <div>
                <button
                    type="button"
                    onClick={this.handleAddTodo}
                >
                    {'Add Todo'}
                </button>
                <ul>
                    {
                        props.todoList.map(todo => (
                            <li key={todo.id}>
                                {todo.text}
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Todo);
