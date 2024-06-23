import styled from "styled-components";

const NumberSelector = ({ error, setError, selectedNum, setSelectedNum }) => {
  let nums = [1, 2, 3, 4, 5, 6];

  const selectNumHandler = (num) => {
    setSelectedNum(num);
    setError("");
  };

  return (
    <>
      <NumberContainer>
        <p className="error">{error}</p>
        <div className="flex">
          {nums.map((num) => (
            <Box
              isSelected={num === selectedNum}
              key={num}
              onClick={() => selectNumHandler(num)}
            >
              {num}
            </Box>
          ))}
        </div>
        <p>Select Number</p>
      </NumberContainer>
    </>
  );
};

export default NumberSelector;

const NumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }

  p {
    font-size: 24px;
    font-weight: 700;
  }

  .error {
    font-size: 24px;
    color: red;
  }
`;

const Box = styled.div`
  cursor: pointer;
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
