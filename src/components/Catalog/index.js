import React, { useState } from "react"
import CatalogItem from "../CatalogItem"
import QueueSection from "../QueueSection"
import { Wrapper, Section } from "./Catalog.styles"

const Catalog = ({ search, songs }) => {
  const [queueSection, setQueueSection] = useState(false)

  return (
    <Wrapper>
      <Section>
        <h3>{`Search: ${search}`}</h3>
        <button onClick={() => setQueueSection(!queueSection)}>Queue</button>
      </Section>

      {queueSection && <QueueSection />}
      {songs.length &&
        songs.map((song) => <CatalogItem key={song.song_id} song={song} />)}
    </Wrapper>
  )
}

export default Catalog
