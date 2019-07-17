import React from 'react';
import PropTypes from 'prop-types';

import styles from './FilterButton.module.scss';

const Button = ({
    active,
    children,
    onClick,
}) => {
    if (active) {
        return <span>{children}</span>;
    }
    return (
        <button
            type="button"
            onClick={() => onClick()}
            className={styles.button}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Button;
