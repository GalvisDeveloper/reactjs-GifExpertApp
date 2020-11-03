

import React from 'react'

export const GifGridPanel = ({url, title}) => {

    return (
        <div className = "card">
            <p>Gif: {title}</p>
            <img src={url} alt={title} />
        </div>
    )
}
