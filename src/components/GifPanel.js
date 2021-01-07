

import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridPanel } from './GifGridPanel';
import PropTypes from 'prop-types';

const GifPanel = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__bounce animate__rotateIn">{category}</h3>
            { loading && <p className="animate__animated animate__bounce animate__flash">Loading...</p>}
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

GifPanel.propTypes = {
    category: PropTypes.string.isRequired,
}

export default GifPanel;