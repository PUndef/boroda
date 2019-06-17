import React from 'react';
import { store } from '../../store';

import styles from './FilterButton.module.scss';

class FilterButton extends React.Component {
    handleToggleFilter = () => {
        const { props } = this;
        const { filter } = props;
        store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter,
        });
    }

    render() {
        const { props } = this;
        const {
            children,
            filter,
            currentFilter,
        } = props;
        if (filter === currentFilter) {
            return <span>{children}</span>;
        }
        return (
            <button
                type="button"
                onClick={this.handleToggleFilter}
                className={styles.button}
            >
                {children}
            </button>
        );
    }
}

export default FilterButton;
