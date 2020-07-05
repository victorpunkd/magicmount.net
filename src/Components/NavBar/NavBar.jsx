import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navBarContainer">
      <div className="w3-row">
        <div className="w3-half firstHalf">
          <span className="navBarItem">HOME</span>
          <span className="navBarItem">ABOUT US</span>
          <span className="navBarItem">BUY</span>
          <span className="navBarItem">RENT</span>
          <span className="navBarItem">HOME LOAN</span>
          <span className="navBarItem">CONSTRUCTION</span>
        </div>
        <div className="w3-half secondHalf">
          <span className="navBarItem">BLOGS</span>
          <span className="navBarItem">MAGIC GUIDE CONTACT</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
