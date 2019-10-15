// create imports for all js related files
import React, { Component } from "react";
import Cards from "./components/Cards/Cards"
import Head from "./components/Head/Head";
import Wrapper from "./components/Wrapper/Wrapper";
//import CardsJ from "../src/components/Cards/Cards.json";


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