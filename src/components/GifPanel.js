

import React, { useEffect, useState } from 'react'
import { GifGridPanel } from './GifGridPanel';
import { getGifs } from '../helpers/getGifs';

export const GifPanel = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category)
            .then(setImages);
    }, [category])

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridPanel
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
