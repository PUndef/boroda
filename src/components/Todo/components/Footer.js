import React from 'react';
import FilterButton from '../../FilterButton';

class Footer extends React.PureComponent {
    render() {
        const { props } = this;
        const {
            visibilityFilter,
            onFilterClick,
        } = props;
        return (
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
    }
}

export default Footer;
