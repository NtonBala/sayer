import {hashHistory} from 'react-router';

//create history wrapper
export const history = hashHistory;

//create path as constants
export const itemsPath = (id = ':item_id') =>  `/items/${id}`;
export const addItemPath = '/add-item';
