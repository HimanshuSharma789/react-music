import React, { useContext } from "react"
import { Context } from "../../context"
import QueueList from "../QueueList"
import { Wrapper } from "./QueueSection.styles"

const QueueSection = () => {
  const [{ queue, current }, setState] = useContext(Context)

  function updateSong(newIndex) {
    setState((prevState) => ({ ...prevState, current: newIndex }))
  }

  return (
    <Wrapper>
      {queue.length ? (
        queue.map((song, index) => (
          <QueueList
            key={song.song_id}
            index={index}
            current={current}
            callback={updateSong}
          >
            {song}
          </QueueList>
        ))
      ) : (
        <b>Empty queue</b>
      )}
    </Wrapper>
  )
}

export default QueueSection
