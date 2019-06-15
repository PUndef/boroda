import React from 'react';
import uuidv1 from 'uuid/v1';
import { connect } from 'react-redux';
import store from '../../store/store';

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

    render() {
        const { props } = this;
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
                <ul>
                    {
                        props.todoList.map(todo => (
                            <li
                                key={todo.id}
                                className={styles.liItem}
                            >
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
