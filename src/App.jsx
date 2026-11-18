import { useState, useEffect } from "react";
import BestScore from "./components/BestScore.jsx";
import CurrentScore from "./components/CurrentScore.jsx";
import Card from "./components/Card.jsx";
import API_KEY from "./api_key.js";
import Intro from "./components/Intro.jsx";

function App() {
  // const localImages = Object.values(
  //   import.meta.glob("./assets/images/*.gif", {
  //     eager: true,
  //     query: "?url",
  //     import: "default",
  //   }),
  // );

  // const initialCards = localImages.map((image, index) => ({
  //   id: index,
  //   title: `Test GIF ${index + 1}`,
  //   image,
  // }));

  const [cards, setCards] = useState([]); //initial cards when locally working
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

  useEffect(() => {
    const params = new URLSearchParams({
      api_key: API_KEY,
      q: "cats",
      limit: "10",
      rating: "g",
    });

    async function fetchGifs() {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?${params}`,
      );

      if (!response.ok) {
        throw new Error(`GIPHY error: ${response.status}`);
      }

      const data = await response.json();

      const gifs = data.data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        image: gif.images.fixed_height_still.url,
      }));

      setCards(gifs);
    }

    fetchGifs();
  }, []);

  return (
    <>
      <Intro />
      <BestScore score={bestScore} />
      <CurrentScore score={score} />
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          image={card.image}
          handleClick={handleScoreIncrease}
          fail={handleFail}
          isClicked={clickedList.includes(card.id)}
        />
      ))}
    </>
  );
}

export default App;
