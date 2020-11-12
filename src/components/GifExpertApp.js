

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddCategory from './AddCategory';
import { GifPanel } from './GifPanel';

const GifExpertApp = ({ title }) => {

    const [categories, setCategories] = useState(['Motogp']);

    return (
        <div className="container">
            <div className="title">
                <h2 className="animate__animated animate__bounce animate__slideInDown animate_fast">{title}</h2>
            </div>
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
        </div>
    );
}

GifExpertApp.prototype = {
    title: PropTypes.string.isRequired
}

export default GifExpertApp;
