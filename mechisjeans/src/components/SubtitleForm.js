import React from 'react';
import "../styles/formstyle.css"

const SubtitleForm = ({text}) => {
  return (
    <div className='Subtitle-form'>
      <label>{text}</label>
    </div>
  )
}
export default SubtitleForm;