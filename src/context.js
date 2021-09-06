import React, { useState, createContext } from "react"

export const Context = createContext()

const PlayerProvider = ({ children }) => {
  const initialState = {
    queue: [],
    current: 0,
  }

  const [state, setState] = useState(initialState)

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  )
}

export default PlayerProvider
