import React, { Component } from "react";
import Section from "./Section";
import Header from "./Header";
import Footer from "./Footer";

class Main extends Component
{
    render()
    {
        return(
            <div>
                <Header/>
                <Section/>
                <Footer/>

            </div>
        );
    }
}

export default Main;