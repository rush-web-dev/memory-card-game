import { useState } from "react";
import BestScore from "./components/BestScore.jsx";
import CurrentScore from "./components/CurrentScore.jsx";
import Card from "./components/Card.jsx";

function App() {
  const cards = ["hello", "hi", "bonjour", "bosoir"];
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedList, setClickedList] = useState([]);
  function handleScoreIncrease(cardTitle) {
    const newScore = score + 1;
    if (newScore > bestScore) {
      setBestScore(newScore);
    }
    setScore(newScore);
    const newClickedList = [cardTitle, ...clickedList];
    setClickedList(newClickedList);
  }
  function handleFail() {
    setScore(0);
    setClickedList([]);
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

      {/* <Card
        title={"hello"}
        handleClick={handleScoreIncrease}
        fail={handleFail}
        isClicked={clickedList.includes("hello")}
      />
      <Card
        title={"hi"}
        handleClick={handleScoreIncrease}
        fail={handleFail}
        isClicked={clickedList.includes("hi")}
      />
      <Card
        title={"bonjour"}
        handleClick={handleScoreIncrease}
        fail={handleFail}
        isClicked={clickedList.includes("bonjour")}
      /> */}
    </>
  );
}

export default App;
