  
import React from "./node_modules/react";
import "./Cards.css";

import React, { useState } from "react";
import ReactDOMServer from 'react-dom/server';
import Cards from "./components/Cards";
import Wrapper from "./components/Wrapper";
import Head from "./components/Head";
import Cards from "../src/Cards.json";
import "./App.css";

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