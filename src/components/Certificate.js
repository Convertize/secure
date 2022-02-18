import React from "react";
import shield from "../images/certificado.png";
import "../css/certificate.css";

const Certificate = () => {
  return (
    <div className="background">
      <p className="store-name semi-bold">francoi</p>
      <div className="certificate container">
        <h4 className="semi-bold pt-4">status</h4>
        <div className="shield">
          <img src={shield} />
          <span className="status">
            <h3>CERTIFICATE STORE</h3>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
