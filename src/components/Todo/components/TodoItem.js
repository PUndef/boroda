import React from 'react';

import styles from './TodoItem.module.scss';

class TodoItem extends React.PureComponent {
    render() {
        const { props } = this;
        const { completed, text, onClick } = props;
        return (
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
                    {text}
                </button>
            </li>
        );
    }
}

export default TodoItem;
