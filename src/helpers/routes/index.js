import {hashHistory} from 'react-router';

//use path as constants
export const itemsPath = (id = ':item_id') =>  `/items/${id}`;
export const formPath = '/add-item';

//use history wrapper
export const history = hashHistory;
