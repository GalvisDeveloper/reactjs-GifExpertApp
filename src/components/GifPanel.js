

import React, { useEffect, useState } from 'react'
import { GifGridPanel } from './GifGridPanel';

export const GifPanel = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGif();
    }, [])

    const getGif = async () => {
        const url = "https://api.giphy.com/v1/gifs/search?q=Big+Bang+theory&limit=30&api_key=kHA2LwEs6IlTUv66ibdSl7cc1CkB2VHD";
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
            }
        });
        // console.log(data);
        console.log(gifs);
        setImages(gifs);
    }

    return (
        <div className="card-grid">
            <h3>{category}</h3>
            {
                images.map(img => (
                    <GifGridPanel
                        key={img.id}
                        {...img}
                    />
                ))
            }
        </div>
    )
}
