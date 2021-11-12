import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import eye from "./eye.png";

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 25 }}
        style={{ height: 120, width: 120 }}
      >
        <div className="Tilt-inner pa3">
          <img style={{ paddingTop: '5px' }} alt="logo" src={ eye }/>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
