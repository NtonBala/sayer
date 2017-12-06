import React from 'react';
import PropTypes from 'prop-types';
import {addItemPath} from '../../helpers/routes/index';
import MainHeader from './headers/MainHeader';
import NavHeader from './headers/NavHeader';

const MainLayout = ({location, children}) => {
    const {pathname} = location;

    return (
        <div>
            {pathname === '/' ?
                <MainHeader/> :
                (pathname === addItemPath) ?
                    <NavHeader>
                        Create new item
                    </NavHeader> :
                    <NavHeader
                        itemTitle='First item with customized long title'
                    />
            }
            {children}
        </div>
    );
};

MainLayout.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string
    }).isRequired,
    children: PropTypes.node.isRequired
};

export default MainLayout;
