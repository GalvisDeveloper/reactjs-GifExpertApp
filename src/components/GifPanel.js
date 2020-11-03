

import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { GifGridPanel } from './GifGridPanel';
// import { getGifs } from '../helpers/getGifs';

export const GifPanel = ({ category }) => {

    // const [images, setImages] = useState([]);
    const { loading } = useFetchGifs();


    // useEffect(() => {
    //     getGifs(category)
    //         .then(setImages);
    // }, [category])

    return (
        <>
            <h3>{category}</h3>
            {loading? 'Cargando...' : 'Data cargada'}
            {/* <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridPanel
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div> */}
        </>
    )
}
