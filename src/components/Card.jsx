import styled from "styled-components";

const CardContainer = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 100%;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  max-width: 100%;
  height: 140px;
  border-radius: 10px;
`;

const CardText = styled.p`
  text-align: center;
  margin-top: 10px;
  font-size: 15px;
  background-color: #97f8fc;
  border-radius: 10px;
  padding: 5px;
`;

const Card = ({ character, handleClick }) => {
  const handleError = (e) => {
    e.target.src = "/fallback-image.png";
  };

  return (
    <CardContainer onClick={() => handleClick(character)}>
      <CardImage
        src={character.imageUrl}
        alt={character.name}
        onError={handleError}
      />
      <CardText>{character.name}</CardText>
    </CardContainer>
  );
};

export default Card;
