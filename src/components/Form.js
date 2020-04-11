import React, { useState } from 'react';



const Form = ({actualizarTareas}) => {

    const [item,setItem] = useState('')

    const handleChange = (e) => {
            e.preventDefault();
            setItem(e.target.value)
     };

     const handleSubmit = (e) => { 
        e.preventDefault();
        actualizarTareas(item)
        setItem('')
     };

    return (

        <form onSubmit={handleSubmit}>
            <input type="text" value={item} onChange={handleChange}/>
            <input type="submit" value="Agregar"/>
        </form>

    );
};

export default Form;
