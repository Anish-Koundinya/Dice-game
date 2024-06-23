import styled from "styled-components";

const RollDice = ({ currentDice, rollDice }) => {
  return (
    <DiceContainer>
      <div className="dice">
        <img
          src={`/images/dice/dice_${currentDice}.png`}
          alt="dice1"
          onClick={rollDice}
        />
      </div>
      <p>Click On Dice To Roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;
