import React, { useState } from "react"
import { FaSearch } from "react-icons/fa"

import { Wrapper } from "./SearchBar.styles"

const SearchBar = ({ setSearch }) => {
  const [searchTerm, setSeachTerm] = useState("")

  function handleInput(event) {
    setSeachTerm(event.currentTarget.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(searchTerm)
    setSearch(searchTerm)
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchTerm} onChange={handleInput} placeholder="Search Song" />
        <button title='Search'>
          <FaSearch />
        </button>
      </form>
    </Wrapper>
  )
}

export default SearchBar
