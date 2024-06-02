import { message } from "antd";
import { useEffect, useState } from "react";
import styled from "styled-components";
import GameBoard from "./components/GameBoard";
import Scoreboard from "./components/Scoreboard";

const AppContainer = styled.div`
  text-align: center;
  font-family: "Roboto", sans-serif;
`;

const Header = styled.h1`
  font-family: "Bangers", cursive;
`;

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [selectedCharacters, setSelectedCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    const response = await fetch("https://api.disneyapi.dev/character");
    const data = await response.json();
    const limitedCharacters = data.data.slice(0, 24);
    setCharacters(limitedCharacters);
    shuffleArray(limitedCharacters);
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const handleCardClick = (character) => {
    if (selectedCharacters.includes(character)) {
      setCurrentScore(0);
      setSelectedCharacters([]);
      console.log("Game over!");
      message.error("Game over!");
    } else {
      setSelectedCharacters([...selectedCharacters, character]);
      setCurrentScore(currentScore + 1);
      if (currentScore + 1 > bestScore) {
        setBestScore(currentScore + 1);
      }
    }
    shuffleArray(characters);
  };

  return (
    <AppContainer>
      <Header>Disney Memory Card</Header>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <GameBoard characters={characters} handleClick={handleCardClick} />
    </AppContainer>
  );
};

export default App;
