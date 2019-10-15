// create imports for all js related files
import React, { Component } from "react";
import Cards from "./components/Cards/Cards"
import Head from "./components/Head/Head";
import Wrapper from "./components/Wrapper/Wrapper";
// import Cards from "../src/Cards.json";

class App extends Component {
  state = {
    Cards
  };

  removeCard = id => {
    const Cards = this.state.Cards.filter(Card => Card.id !== id);
    this.setState({ Cards });
  };

  render() {
    return ( 
      <Wrapper>
        <Head>Cards List</Head>
        {this.state.Cards.map(Card => (
          <CardCard
          removeCard={this.removeCard}
          id={Card.id}
          key={Card.id}
          image={Card.image}
          />
        ))}
      </Wrapper>
    )
  }
}
export default App;















// function App () {

// const [cardsState, setcardsState] = Component(cards); 
// const [scoreState, setScoreState] = Component(0);
// const [highScoreState, setHighScoreState] = Component(0);
// const [answerState, setAnswerState] = Component("Click an image to start!")

// function clickCount(id) {

//     return cardsState.find((o, i) => {
//       if (o.id === id) {
//         if (cards[i].count === 0) {
//           cards[i].count = cards[i].count + 1;
//           setScoreState(scoreState + 1)
//           setAnswerState("Yay You Did It!")
//           setcardsState(cardsState.sort(() => Math.random() - 0.5))
//         } else {
//           if (scoreState > highScoreState) {
//           setHighScoreState(scoreState)
//           setAnswerState("You guessed incorrectly!")
//           }
//           cardsState.forEach(cards => {
//           cards.count = 0;
//           });
//           alert(`Game Over :( \nscore: ${scoreState}`);
      
//           setScoreState(0)
//           setcardsState(cardsState.sort(() => Math.random() - 0.5))
//         }
//         return true;
//       }
//     });
//   }

//     return (
//       <wrapper>
//         <Head answer={answerState} score={scoreState} highscore={highScoreState}>Clicky Click Scoreboard!</Head>
//         {cardsState.map(Cards => (
//           <Cards
//             clickCount={clickCount}
//             id={Cards.id}
//             key={Cards.id}
//             image={Cards.image}
//           /> 
//         ))}
//       </wrapper>
//     );
  
// }

// export default App;