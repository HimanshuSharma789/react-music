import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  border-radius: 10px;
  border: 1px solid #cfcfcf;
  margin: 10px 0px;
  height: 60px;
  cursor: pointer;

  :hover {
    border: 1px solid;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
      0 0 20px rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }

  img {
    border-radius: 10px;
    width: 60px;
    height: 60px;
  }

  div {
    padding-left: 10px;
  }

  p {
    padding: 0px;
    margin: 0 auto;
  }

  button {
    background: none;
    border: none;
  }

  .option {
    display: flex;
    margin-right: 0;
    margin-left: auto;
  }

  #addToQueue {
    cursor: pointer;
  }
`
