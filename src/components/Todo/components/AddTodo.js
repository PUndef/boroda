import React from 'react';
import PropTypes from 'prop-types';

const AddTodo = ({
    onAddClick,
}) => {
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
                        onAddClick(input.value);
                        input.value = '';
                    }
                }
            >
                {'Add Todo'}
            </button>
        </div>
    );
};

AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired,
};

export default AddTodo;
