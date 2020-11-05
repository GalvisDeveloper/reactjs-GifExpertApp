

import React from 'react'

export const GifGridPanel = ({url, title}) => {

    return (
        <div className = "card animate__animated animate__bounce animate__delay-3s">
            <p>Gif: {title}</p>
            <img src={url} alt={title} />
        </div>
    )
}
