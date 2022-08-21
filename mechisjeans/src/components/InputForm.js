import React from 'react';
import "../styles/formstyle.css"

const InputForm = ({atribute, handleChange, param}) => {
  return (
    <div className='Contenedor-input-form'>
      <input
         id = {atribute.id}
        name = {atribute.name}
        placeholder = {atribute.placeholder}
        type = {atribute.type}
        onChange = {(e) => handleChange (e.target.name, e.target.value)}
        className ='Input-form'
      />
    </div>
  )
}
export default InputForm;
