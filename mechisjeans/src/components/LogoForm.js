import React from 'react';
import "../styles/logos.css";
import Logo from '../assets/logoloanaheader.png';

const LogoHeader = () => {
  return (
    <div>
      <img className="Logo-header" src={Logo} alt="logo" />
    </div>
  )
}
export default LogoHeader;
