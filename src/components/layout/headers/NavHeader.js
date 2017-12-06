import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../elements/Link';

const NavHeader = ({children, itemTitle}) => (
    //use Link wrapper instead of core react-router Link component
    <header>
        <Link to='/'>
            <span>&#8592;</span>
        </Link>
        <h2>{children || itemTitle}</h2>
    </header>
);

NavHeader.propTypes = {
    children: PropTypes.node,
    itemTitle: PropTypes.string
};

export default NavHeader;
