import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 270px;
    height: 30px;
    border-radius: 10px;
    padding-left: 10px;
    font-size: 1rem;
    border: 2px solid #afafaf;

    :focus {
      outline: none;
    }
  }

  button {
    margin-left: 10px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    align-items: center;
    background: url(<FaSearch/>);
    cursor: pointer;
  }
`
