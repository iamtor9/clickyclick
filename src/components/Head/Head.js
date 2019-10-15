import React from "./node_modules/react";
import "./Head.css";

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