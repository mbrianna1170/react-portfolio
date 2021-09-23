import React from "react";
import Banner from "../../assets/images/banner.png";



function Header() {
    return (
        <div class="jumbotron jumbotron-fluid">
        <img src={Banner} className="banner" alt="banner" />
      </div>
    );
  }
  
  export default Header;
  