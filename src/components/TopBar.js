import React from "react";
import "../css/topbar.css";
import logo from "../images/logo.svg";
import lock from "../images/lock_icon.png";
import {FaLock} from 'react-icons/fa'

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="safe-amb semi-bold"><img className='lock-icon' src={lock}/><span className='text-dark bold'>100%</span> seguro</div>
      </div>
    </div>
  );
};

export default TopBar;
