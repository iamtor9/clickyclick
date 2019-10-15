// create imports for all js related files
import React, { Component } from "react";
import Cards from "./components/Cards/Cards"
import Head from "./components/Head/Head";
import Wrapper from "./components/Wrapper/Wrapper";
//import CardsJ from "../src/components/Cards/Cards.json";

const Head = props => (

<div id="root">

//navbar
<nav className="navbar">

  <ul>
    <li className="label"><a href="/">Clicky Click Away!</a></li>
    <li className="answers">{props.answer}</li>
    <li> Score: {props.score}</li> 
    <li> Best Score: {props.highscore}</li>
  </ul>

</nav>

<header className="Head">
  <h3>Select an image to collect points! If you select the same image twice, you may want to consider getting more rest!</h3>
  </header>
  </div>
);


export default Head;