// create imports for all js related files
import React, { Component } from "react";
import Cards from "./components/Cards/Cards"
import Head from "./components/Head/Head";
import Wrapper from "./components/Wrapper/Wrapper";
//import CardsJ from "../src/components/Cards/Cards.json";

const Wrapper = props => <div className="Wrapper">{props.children}</div>;

export default Wrapper;