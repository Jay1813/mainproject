import React, { Component } from "react";
class Header extends Component
{
    render(){
        return(
            <nav className="navbar navbar-dark bg-info">
  <div className="container-fluid ">
    <a className="navbar-brand" href="index.html">
      <img src="/Images/bg.jpg" alt="" width="30" height="24" className="d-inline-block align-text-top"></img> SCP FOUNDATION
        </a>
    </div>
    </nav>
        );
    }

}
export default Header;