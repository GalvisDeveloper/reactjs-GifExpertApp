

import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(catg => [inputValue, ...catg, ]);
            setInputValue("");
        } else {
            alert("Añada una categoria con nombre más largo", "Alerta");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Ingrese una categoría para generar GIFs de ésta"
            />
        </form>
    );

}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;