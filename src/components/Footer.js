import React from "react";
import "../css/footer.css";
import logo from "../images/white_logo.svg";
import {FaPhoneAlt} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-logo">
          <div className="logo">
            <img src={logo} />
          </div>
          <span className="font-size-12">
          &copy; Convertize.
            <p>Todos os direitos reservados</p>
          </span>
        </div>
        <div className="contato"><FaPhoneAlt className='phone-icon'/>11 4010.7676</div>
      </div>
    </footer>
  );
};

export default Footer;
