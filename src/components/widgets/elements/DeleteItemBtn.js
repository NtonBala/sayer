import React from 'react';
import PropTypes from 'prop-types';

const DeleteItemBtn = ({deleteItem}) => (
    <button onClick={deleteItem}>Delete</button>
);

DeleteItemBtn.propTypes = {
    deleteItem: PropTypes.func.isRequired
};

DeleteItemBtn.defaultProps = {
    deleteItem: () => true
};

export default DeleteItemBtn;
