import styled from "styled-components"

export const Wrapper = styled.div`
  background: #dfdfdf;
  width: 100%;
  position: fixed;
  border-top: 1px solid;
  text-align: center;
  align-items: center;
  bottom: 0;
  left: 0;

  .seekbar {
    cursor: pointer;
    height: 5px;
    width: 300px;
  }
`

export const Content = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  width: 350px;

  img {
    margin: 8px;
    border-radius: 10px;
    width: 50px;
  }
`

export const Controls = styled.div`
  float: right;
  margin-left: auto;
  margin-right: 0;

  button {
    border: 0;
    background: transparent;
    cursor: pointer;

    :focus {
      outline: none;
    }
  }
`
