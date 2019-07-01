import React from 'react';
import PropTypes from 'prop-types';

import styles from './TodoItem.module.scss';

const TodoItem = ({
    completed,
    text,
    onClick,
}) => (
    <li
        className={`
            ${styles.item}
            ${completed === false ? '' : styles['item--completed']}
        `}
    >
        <button
            type="button"
            onClick={onClick}
        >
            {text.toString()}
        </button>
    </li>
);

TodoItem.propTypes = {
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default TodoItem;
