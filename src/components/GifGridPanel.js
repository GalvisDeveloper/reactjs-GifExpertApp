

import React from 'react'

export const GifGridPanel = ({url, title}) => {

    return (
        <div className = "card animate__animated callout-subtitle animate__animated animate__zoomInDown">
            <p>Gif: {title}</p>
            <img src={url} alt={title} />
        </div>
    )
}
