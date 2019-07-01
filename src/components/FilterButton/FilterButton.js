import React from 'react';

import styles from './FilterButton.module.scss';

class FilterButton extends React.PureComponent {
    handleToggleFilter = () => {
        const { props } = this;
        const { filter, onClick } = props;
        onClick(filter);
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
