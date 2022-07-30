import React from 'react';
import "../styles/formstyle.css"

const LabelForm = ({text}) => {
  return (
    <div>
      <label className='Label-form'>
        {text}
      </label>
    </div>
  )
}
export default LabelForm;
