

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AddCategory from './components/AddCategory';
import { GifPanel } from './components/GifPanel';

const GifExpertApp = ({ mensaje }) => {

    const [categories, setCategories] = useState(['Fairy Tail']);

    return (
        <>
            <h2>{mensaje}</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map(category => (
                        <GifPanel
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>

        </>
    );
}

GifExpertApp.prototype = {
    mensaje: PropTypes.string.isRequired
}


export default GifExpertApp;
