import React from 'react';
import Proptypes from 'prop-types';

const Navbar = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    )
}
Navbar.propTypes = {
    title: Proptypes.string.isRequired
}
Navbar.defaultProps ={
    title:"Default App"
}
export default Navbar;