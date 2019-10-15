// create imports for all js related files
import React, { useState } from "react";
import Cards from "./components/Cards";
import wrapper from "./components/wrapper";
import Head from "./components/Head";
import Cards from "../src/Cards.json";
import "./App.css";


function App () {

const [cardsState, setcardsState] = useState(cards); 
const [scoreState, setScoreState] = useState(0);
const [highScoreState, setHighScoreState] = useState(0);
const [answerState, setAnswerState] = useState("Click an image to start!")

function clickCount(id) {

    return cardsState.find((o, i) => {
      if (o.id === id) {
        if (cards[i].count === 0) {
          cards[i].count = cards[i].count + 1;
          setScoreState(scoreState + 1)
          setAnswerState("Yay You Did It!")
          setcardsState(cardsState.sort(() => Math.random() - 0.5))
        } else {
          if (scoreState > highScoreState) {
          setHighScoreState(scoreState)
          setAnswerState("You guessed incorrectly!")
          }
          cardsState.forEach(cards => {
          cards.count = 0;
          });
          alert(`Game Over :( \nscore: ${scoreState}`);
      
          setScoreState(0)
          setcardsState(cardsState.sort(() => Math.random() - 0.5))
        }
        return true;
      }
    });
  }

    return (
      <wrapper>
        <Head answer={answerState} score={scoreState} highscore={highScoreState}>Clicky Click Scoreboard!</Head>
        {cardsState.map(Cards => (
          <Cards
            clickCount={clickCount}
            id={Cards.id}
            key={Cards.id}
            image={Cards.image}
          /> 
        ))}
      </wrapper>
    );
  
}

export default App;