import React from 'react';
import PropTypes from 'prop-types';

const SubmitBtn = ({id}) => (
    <input
        id={id}
        type='submit'
        value='>'
    />
);

SubmitBtn.propTypes = {
    id: PropTypes.string.isRequired
};

export default SubmitBtn;
