import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
  margin: 2px;
  border-radius: 5px;
  background: ${({ isPlaying }) => (isPlaying ? "#afafaf" : "")};

  :hover {
    border: 1px solid;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
      0 0 20px rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }

  img {
    border-radius: 4px;
    width: 40px;
    height: 40px;
  }

  div {
    margin-left: 10px;
  }

  p {
    padding: 0;
    margin: 0 auto;
  }

  .status {
    margin-right: 5px;
    margin-left: auto;
  }
`
