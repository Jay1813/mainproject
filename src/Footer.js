import React, { Component } from "react";
class Footer extends Component
{
    render(){
        return(
            <footer className ="container ">
            <p className="float-right"><a href="#">Back to top</a></p>
            <p>© Jay <a href="index.html">Privacy</a> · <a href="index.html">Terms</a></p>
          </footer>
        );
    }

}
export default Footer;