import styled from "styled-components";

const ScoreboardContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
`;

const ScoreText = styled.h2`
  font-size: 20px;
  margin: 0;
`;

const Scoreboard = ({ currentScore, bestScore }) => {
  return (
    <ScoreboardContainer>
      <ScoreText>Current Score: {currentScore}</ScoreText>
      <ScoreText>Best Score: {bestScore}</ScoreText>
    </ScoreboardContainer>
  );
};

export default Scoreboard;
