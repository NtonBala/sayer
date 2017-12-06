import React from 'react';
import PropTypes from 'prop-types';

const CommentsCounter = ({counter}) => (
    <span>{counter}</span>
);

CommentsCounter.propTypes = {
    counter: PropTypes.number
};

CommentsCounter.defaultProps = {
    counter: 2
};

export default CommentsCounter;
