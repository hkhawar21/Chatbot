import React from "react";

const Header = () => {

    return(

    <div className="header">
    <ul className="menu simple float-right">
      <li>Home</li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
      <li><button type="button" className="button small" >Toggle Menu</button></li>
    </ul>
  </div>

);
}


export default Header;