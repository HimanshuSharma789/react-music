import React from "react"
import CatalogItem from "../CatalogItem"
import { Wrapper } from "./Catalog.styles"

const Catalog = ({ search, songs }) => {
  return (
    <Wrapper>
      <h3>{search}</h3>
      {songs.length &&
        songs.map((song) => <CatalogItem key={song.song_id} song={song} />)}
    </Wrapper>
  )
}

export default Catalog
