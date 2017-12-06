import React from 'react';
import Link from '../../elements/Link';
import {addItemPath} from '../../../helpers/routes/index';

const AddItemLink = () => (
    //use Link wrapper instead of core react-router Link & addItemPath constant
    <Link to={addItemPath}>+</Link>
);

export default AddItemLink;
