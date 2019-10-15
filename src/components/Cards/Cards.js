  
import React from "./node_modules/react";
import "./Cards.css";

const Cards = props => (

  <div className="container">
    <div className="Cards" onClick={() => props.clickCount(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  </div>
 
);

export default Cards;