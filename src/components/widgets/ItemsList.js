import React from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash/collection';
import Item from './Item';

const ItemsList = ({itemIds}) => (
    <ul>
        {map(itemIds, id => (
            <Item
                key={id}
                id={id}
            />
        ))}
    </ul>
);

ItemsList.propTypes = {
    itemIds: PropTypes.arrayOf(
        Item.propTypes.id
    )
};

ItemsList.defaultProps = {
    itemIds: [Item.defaultProps.id]
};

export default ItemsList;
