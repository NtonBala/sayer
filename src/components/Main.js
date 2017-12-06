import React from 'react';
import ItemsList from './widgets/ItemsList';
import AddItemLink from './widgets/elements/AddItemLink';

const Main = () => (
    <div>
        <ItemsList/>
        <div>
            <AddItemLink/>
        </div>
    </div>
);

export default Main;
