

import React from 'react'
import PropTypes from 'prop-types';
import GitHubIcon from '@material-ui/icons/GitHub';

export const Footer = ({ property }) => {
    return (
        <div className="footer">
            <h1 className="animate__animated animate__bounce animate__zoomInUp">{property + " Cristian Bustos ➡ "}</h1>
            <GitHubIcon />
            <a href="https://github.com/GalvisDeveloper?tab=repositories"> GalvisDeveloper </a>
            <h1> - 2020 © </h1>
            <br />
        </div>
    )
}

Footer.prototype = {
    property: PropTypes.string.isRequired
}

export default Footer;