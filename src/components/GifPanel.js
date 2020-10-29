

import React, { useEffect, useState } from 'react'

export const GifPanel = ({ category }) => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        getGif();
    }, [])   /* <<<<----- LISTA DE DEPENDENCIAS */ 

    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     };
    // }, [input]);

    const getGif = async () => {
        const url = "https://api.giphy.com/v1/gifs/search?q=Dragon+Ball&limit=30&api_key=kHA2LwEs6IlTUv66ibdSl7cc1CkB2VHD";
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
    }

    return (
        <div>
            <h3>{category}</h3>
            <h3>{count}</h3>
            <button type="submit" onClick={() => setCount(count + 1)}>Sume</button>
        </div>
    )
}
