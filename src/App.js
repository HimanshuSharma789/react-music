import { useEffect, useRef, useState } from "react"

import Catalog from "./components/Catalog"
import SearchBar from "./components/SearchBar"
import Player from "./components/Player"
import PlayerProvider from "./context"

const App = () => {
  const [search, setSearch] = useState("")
  const [songs, setSongs] = useState({})
  const initial = useRef(true)

  useEffect(() => {
    if (initial.current) {
      initial.current = false
      return
    }

    const fetchSongs = async () => {
      const response = await fetch(`https://saavn.me/search?song=${search}`)
      const songsData = await response.json()
      console.log(songsData)
      setSongs(songsData)
    }

    fetchSongs()
  }, [search])

  return (
    <div className="App">
      <PlayerProvider>
        <SearchBar setSearch={setSearch} />
        <Catalog search={search} songs={songs} />
        <Player />
      </PlayerProvider>
    </div>
  )
}

export default App
