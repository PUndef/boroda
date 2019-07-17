import React from 'react';
import FilterButton from '../../FilterButton';

const Footer = () => (
    <p>
        {'Show:'}
        {' '}
        <FilterButton
            filter="SHOW_ALL"
        >
            {'All'}
        </FilterButton>
        {' '}
        <FilterButton
            filter="SHOW_ACTIVE"
        >
            {'Active'}
        </FilterButton>
        {' '}
        <FilterButton
            filter="SHOW_COMPLETED"
        >
            {'Completed'}
        </FilterButton>
    </p>
);

export default Footer;
