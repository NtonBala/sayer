import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../elements/Link';
import {itemsPath} from '../../../helpers/routes/index';

const ItemLink = ({id, title}) => (
    <Link to={itemsPath(id)}>{title}</Link>
);

ItemLink.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string
};

ItemLink.defaultProps = {
    id: 'item1',
    title: 'First item with customized long title'
};

export default ItemLink;
