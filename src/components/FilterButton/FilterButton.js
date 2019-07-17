import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { store } from '../../store';

class FilterButton extends Component {
    // componentDidMount() {
    //     this.unsubscribe = store.subscribe(() => {
    //         this.forceUpdate();
    //     });
    // }

    // componentWillUnmount() {
    //     this.unsubscribe();
    // }

    render() {
        const { filter, children } = this.props;
        const state = store.getState();
        return (
            <Button
                active={
                    filter === state.visibilityFilter
                }
                onClick={
                    () => {
                        store.dispatch({
                            type: 'SET_VISIBILITY_FILTER',
                            filter,
                        });
                    }
                }
            >
                {children}
            </Button>
        );
    }
}

FilterButton.propTypes = {
    filter: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default FilterButton;
