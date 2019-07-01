import React from 'react';
import PropTypes from 'prop-types';
import FilterButton from '../../FilterButton';

const Footer = ({
    visibilityFilter,
    onFilterClick,
}) => (
    <p>
        {'Show:'}
        {' '}
        <FilterButton
            filter="SHOW_ALL"
            currentFilter={visibilityFilter}
            onClick={onFilterClick}
        >
            {'All'}
        </FilterButton>
        {' '}
        <FilterButton
            filter="SHOW_ACTIVE"
            currentFilter={visibilityFilter}
            onClick={onFilterClick}
        >
            {'Active'}
        </FilterButton>
        {' '}
        <FilterButton
            filter="SHOW_COMPLETED"
            currentFilter={visibilityFilter}
            onClick={onFilterClick}
        >
            {'Completed'}
        </FilterButton>
    </p>
);

Footer.propTypes = {
    visibilityFilter: PropTypes.string.isRequired,
    onFilterClick: PropTypes.func.isRequired,
};

export default Footer;
