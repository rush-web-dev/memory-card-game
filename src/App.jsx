import { useState } from "react";
import BestScore from "./components/BestScore.jsx";
import CurrentScore from "./components/CurrentScore.jsx";
import Card from "./components/Card.jsx";

function App() {
  const [cards, setCards] = useState(["hello", "hi", "bonjour", "bosoir"]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedList, setClickedList] = useState([]);
  function shuffleCards() {
    const shuffledCards = [...cards];
    shuffledCards.sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  }
  function handleScoreIncrease(cardTitle) {
    const newScore = score + 1;
    if (newScore > bestScore) {
      setBestScore(newScore);
    }
    setScore(newScore);
    const newClickedList = [cardTitle, ...clickedList];
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
      {cards.map((cardTitle) => (
        <Card
          key={cardTitle}
          title={cardTitle}
          handleClick={handleScoreIncrease}
          fail={handleFail}
          isClicked={clickedList.includes(cardTitle)}
        />
      ))}
    </>
  );
}

export default App;
