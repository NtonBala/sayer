import React from 'react';
import ItemLink from './elements/ItemLink';
import CommentsCounter from './elements/CommentsCounter';
import DeleteItemBtn from './elements/DeleteItemBtn';

const Item = ({id, title, comments, deleteItem}) => (
    <li>
        <ItemLink
            id={id}
            title={title}
        />
        <CommentsCounter counter={comments}/>
        <DeleteItemBtn deleteItem={deleteItem}/>
    </li>
);

Item.propTypes = {
    id: ItemLink.propTypes.id,
    title: ItemLink.propTypes.title,
    comments: CommentsCounter.propTypes.counter,
    deleteItem: DeleteItemBtn.propTypes.deleteItem
};

Item.defaultProps = {
    id: ItemLink.defaultProps.id,
    title: ItemLink.defaultProps.title,
    comments: CommentsCounter.defaultProps.counter,
    deleteItem: DeleteItemBtn.defaultProps.deleteItem
};

export default Item;
