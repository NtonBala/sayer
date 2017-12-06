import React from 'react';
import PropTypes from 'prop-types';
import {formPath} from '../../helpers/routes/index';

const MainLayout = ({location, children}) => {
    const {pathname} = location;

    return (
        <div>
            {pathname === '/' ?
                <h1>Main page with items list</h1> :
                (pathname === formPath) ?
                    <h1>Add new item form</h1> :
                    <h1>Single item page with comments</h1>
            }
            {children}
        </div>
    );
};

MainLayout.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string
    }),
    children: PropTypes.node
};

export default MainLayout;
