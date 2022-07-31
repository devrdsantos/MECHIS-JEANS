import React from 'react';
import "../styles/formstyle.css"

const TitleForm = ({text, color}) => {
  return (
    <div className='Title-form'>
      <label>{text}</label>
    </div>
  )
}
export default TitleForm;
