

import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length === 0) {
            alert("Ingrese una categoría antes de añadirla", "Alerta");
        } else if (inputValue.trim().length === 1) {
            alert("Añada una categoria con nombre más largo", "Alerta");
        } else {
            setCategories(catg => [...catg, inputValue]);
            setInputValue("");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );

}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;