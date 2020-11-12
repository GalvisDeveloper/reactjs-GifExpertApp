

import React from 'react'
import PropTypes from 'prop-types';

const Nav = ({ message }) => {
    return (
        <div className="nav">
            <h1 className="animate__animated animate__bounce animate__zoomInUp">{message}</h1>
        </div>
    )
}

Nav.prototype = {
    message: PropTypes.string.isRequired
}

export default Nav;