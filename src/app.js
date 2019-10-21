import React, { useState} from 'react';
// import logo from './logo.svg';
import cards from '../src/Cards.json';
import Header from './components/Header/index';
import Card from './components/Card/index';
import Wrapper from './components/wrapper/index';
// import './App.css';


function App() {

  const [cardState, setCardState] = useState(cards);
  const [pointsState, setPointsState] = useState(0);
  const [topState, setTopState] = useState(0);


function pageantCount(id) {
   // eslint-disable-next-line
  return cardState.find((v,i) => {
    if (v.id === id) {
      //if card clicked equals 0 then make it on clicked equal one so it is already a chosen id
      if (cards[i].clicked === 0) {
        cards[i].clicked = cards[i].clicked + 1;
        setPointsState(pointsState +1)
        setCardState(cardState.sort(() => Math.random() - 0.5))
      } else {
        if (pointsState > topState) {
          setTopState(pointsState)
        }
        cardState.forEach(card => {
          card.clicked = 0;
        });

        //eslint-disable-next-line
        alert(`You got 1st runner up! \nscore: ${pointsState}`);
        setPointsState(0)
        setCardState(cardState.sort(() => Math.random() - 0.5))
      }
      return true;
      }
    });
  }

return (
  <Wrapper>
    <Header score={pointsState} highscore={topState}>Clicky Game</Header>
    {cardState.map(card => (
      <Card
      pageantCount={pageantCount}
        id={card.id}
        key={card.id}
        image={card.image}
      /> 
    ))}
  </Wrapper>
  );
}


export default App;

