import React from 'react';
import "../styles/formstyle.css";

const PForm = ({text}) => {
    return (
      <div>
        <label className='P-form'>
          {text}
        </label>
      </div>
  )
}
export default PForm;