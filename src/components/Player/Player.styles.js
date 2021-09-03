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
    /* outline: thin solid orange; */
    /* overflow: hidden; */
    width: 300px;
  }
`

export const Content = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  width: 320px;

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
    box-sizing: border-box;
    height: 36px;

    border-color: transparent transparent transparent #202020;
    transition: 100ms all ease;
    will-change: border-width;
    cursor: pointer;

    // play state
    border-style: solid;
    border-width: 18px 0 18px 30px;

    // paused state
    &.pause {
      border-style: double;
      border-width: 0px 0 0px 30px;
    }

    :focus {
      outline: none;
    }
  }
`
