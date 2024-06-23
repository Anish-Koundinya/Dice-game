import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button } from "../styled/Button";
import { OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [selectedNum, setSelectedNum] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const rollDice = () => {
    if (!selectedNum) {
      setError("Please select a number to roll the dice");
      return;
    }

    const randomNum = Math.floor(Math.random() * 6) + 1;
    setCurrentDice(randomNum);

    if (selectedNum === randomNum) {
      setScore((prev) => prev + randomNum);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNum(undefined);
  };

  const scoreReset = () => {
    setScore(0);
  };

  return (
    <>
      <MainContainer>
        <div className="top">
          <TotalScore score={score} />
          <NumberSelector
            error={error}
            setError={setError}
            selectedNum={selectedNum}
            setSelectedNum={setSelectedNum}
          />
        </div>
        <RollDice currentDice={currentDice} rollDice={rollDice}></RollDice>

        <div className="btns">
          <OutlineButton onClick={scoreReset}>Reset Score</OutlineButton>
          <Button onClick={() => setShowRules((prev) => !prev)}>
            {showRules ? "Hide" : "Show"} Rules
          </Button>
        </div>
        {showRules && <Rules />}
      </MainContainer>
    </>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  height: 100vh;
  padding-top: 70px;
  .top {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

  .btns {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;
