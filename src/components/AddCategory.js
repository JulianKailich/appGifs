import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {

        setInputValue (e.target.value) 
    }

    const handleSubmit = (e) => {
        
        // Evita el refresh de la pagina
        e.preventDefault();

        // .trim() limpia espacios en blanco de ambos lados del string
        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);
            // reseteo el input a 0
            setInputValue ('');
        }
        
    }


  return (

    // No es necesario el <> </> porque el form es una etiqueta html que ya esta agrupando el input
        <form onSubmit={ handleSubmit }>
        <input type="text" value= {inputValue} placeholder="Search your favorite gif" onChange={handleInputChange}>

        </input>
        </form>
 
  )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
