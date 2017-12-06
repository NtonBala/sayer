import MainLayout from '../components/layout/MainLayout';
import {itemsPath, addItemPath} from '../helpers/routes';
import Main from '../components/Main';
import Comments from '../components/Comments';
import NewItem from '../components/NewItem';

const Index = {
    path: '/',
    component: Main
};

const CommentsRoute = {
    path: itemsPath(),
    component: Comments
};

const NewItemRoute = {
    path: addItemPath,
    component: NewItem
};

export default {
    component: MainLayout,
    childRoutes: [
        Index,
        CommentsRoute,
        NewItemRoute
    ]
};
