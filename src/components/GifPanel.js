

import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridPanel } from './GifGridPanel';

export const GifPanel = ({ category }) => {

    const { data:images, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Loading...</p>}
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
