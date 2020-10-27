

import React from 'react'

export const GifPanel = ({ category }) => {

    const getGif = async () => {
        const url = "https://api.giphy.com/v1/gifs/search?q=Dragon+Ball&limit=30&api_key=kHA2LwEs6IlTUv66ibdSl7cc1CkB2VHD";
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized.medium.url,
            }
        });
        console.log(data);
        console.log(gifs);
    }


    getGif();


    return (
        <div>
            <h3>{category}</h3>
        </div>
    )
}
