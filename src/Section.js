import React, { Component } from "react";
import Game from "./data.json";

const games = Game.map(
    (Game) => 
    {
        return(
            
            <div key={Game["heading-1"] } className="card mb-3 " >
            <div className="row g-0">
              <div className="col-md-2 ">
                
              </div>
              <div className="col-md-8 border border-primary bg-light">
                <div className="card-body">
                <h3 className="card-title">{Game.page}</h3>
                <h5 className="card-title">{Game["main-heading"]}</h5>
                <img src={Game.image} className="img-fluid" alt=""></img>
                  <p className="card-text ">{Game["heading-1"]}</p>
                  <p className="card-text"><small className="text-muted">{Game["paragraph-1"]}</small></p>
                  <p className="card-text">{Game["heading-2"]}</p>
                  <p className="card-text"><small className="text-muted">{Game["paragraph-2"]}</small></p>
                  <p className="card-text">{Game["heading-3"]}</p>
                  <p className="card-text"><small className="text-muted">{Game["paragraph-3"]}</small></p>
                </div>
              </div>
              <div className="col-md-2 ">
                
              </div>
            </div>
          </div>
            );
    }
);

class Section extends Component {
    render() {
        return (
            <div>
        {games}
            </div>            
                );
    }
}

export default Section;
