import React from 'react';
import PropTypes from 'prop-types';

import styles from './FilterButton.module.scss';

const FilterButton = ({
    children,
    filter,
    currentFilter,
    onClick,
}) => {
    if (filter === currentFilter) {
        return <span>{children}</span>;
    }
    return (
        <button
            type="button"
            onClick={() => onClick(filter)}
            className={styles.button}
        >
            {children}
        </button>
    );
};

FilterButton.propTypes = {
    children: PropTypes.node.isRequired,
    filter: PropTypes.string.isRequired,
    currentFilter: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default FilterButton;
