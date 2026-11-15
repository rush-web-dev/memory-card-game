import { useState } from "react";
import BestScore from "./components/BestScore.jsx";
import CurrentScore from "./components/CurrentScore.jsx";
import Card from "./components/Card.jsx";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  function handleScoreIncrease() {
    const newScore = score + 1;
    if (newScore > bestScore) {
      setBestScore(newScore);
    }
    setScore(newScore);
  }
  function handleFail() {
    setScore(0);
  }

  return (
    <>
      <BestScore score={bestScore} />
      <CurrentScore score={score} />
      <Card
        title={"hello"}
        handleClick={handleScoreIncrease}
        fail={handleFail}
      />
      <Card title={"hi"} handleClick={handleScoreIncrease} fail={handleFail} />
      <Card
        title={"bonjour"}
        handleClick={handleScoreIncrease}
        fail={handleFail}
      />
    </>
  );
}

export default App;
