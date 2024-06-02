import styled from "styled-components";
import Card from "./Card";

const GameBoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 20px;
  max-width: 1400px;
  margin: 0 auto;
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
