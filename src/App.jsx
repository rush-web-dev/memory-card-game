import { useState } from "react";
import BestScore from "./components/BestScore.jsx";
import CurrentScore from "./components/CurrentScore.jsx";
import Card from "./components/Card.jsx";
import gifs from "./assets/gifs.json";

function App() {
  const [cards, setCards] = useState(gifs);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedList, setClickedList] = useState([]);
  function shuffleCards() {
    const shuffledCards = [...cards];
    shuffledCards.sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  }
  function handleScoreIncrease(cardID) {
    const newScore = score + 1;
    if (newScore > bestScore) {
      setBestScore(newScore);
    }
    setScore(newScore);
    const newClickedList = [cardID, ...clickedList];
    setClickedList(newClickedList);
    shuffleCards();
  }
  function handleFail() {
    setScore(0);
    setClickedList([]);
    shuffleCards();
  }

  return (
    <>
      <BestScore score={bestScore} />
      <CurrentScore score={score} />
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          handleClick={handleScoreIncrease}
          fail={handleFail}
          isClicked={clickedList.includes(card.id)}
        />
      ))}
    </>
  );
}

export default App;
