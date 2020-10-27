

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AddCategory from './components/AddCategory';
import { GifPanel } from './components/GifPanel';
import uniqid from 'uniqid';

const GifExpertApp = ({ mensaje }) => {

    const [categories, setCategories] = useState(['Primera', 'Segunda', 'Tercera']);

    return (
        <>
            <h2>{mensaje}</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map(category => {
                        return <GifPanel
                            category={category}
                            key={uniqid()}
                        />
                    })
                }
            </ol>

        </>
    );
}

GifExpertApp.prototype = {
    mensaje: PropTypes.string.isRequired
}


export default GifExpertApp;
