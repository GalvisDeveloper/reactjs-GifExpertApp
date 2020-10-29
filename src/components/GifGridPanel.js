

import React from 'react'

export const GifGridPanel = (props) => {


    // const [lista, setLista] = useState(img);
    console.log(props);
    return (
        <div>
            {/* <li key={props.id}>{props.title}</li> */}
            <p>Gif: {props.title}</p>
            <img src={props.url} alt={props.title} />
        </div>
    )
}
