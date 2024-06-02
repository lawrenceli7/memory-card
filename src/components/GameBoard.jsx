import styled from "styled-components";
import Card from "./Card";

const GameBoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 20px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(6, 1fr);
    margin: 0 20px;
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const GameBoard = ({ characters, handleClick }) => {
  return (
    <GameBoardContainer>
      {characters.map((character) => (
        <Card
          key={character.name}
          character={character}
          handleClick={handleClick}
        />
      ))}
    </GameBoardContainer>
  );
};

export default GameBoard;
