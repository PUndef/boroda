import React from 'react';
import { v4 } from 'node-uuid';
import { store } from '../../../store';

const AddTodo = () => {
    let input;
    return (
        <div>
            <input
                ref={
                    (node) => {
                        input = node;
                    }
                }
            />
            <button
                type="button"
                onClick={
                    () => {
                        store.dispatch({
                            type: 'ADD_TODO',
                            id: v4(),
                            text: input.value,
                        });
                        input.value = '';
                    }
                }
            >
                {'Add Todo'}
            </button>
        </div>
    );
};

export default AddTodo;
