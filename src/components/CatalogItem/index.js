import React, { useContext } from "react"
import { Context } from "../../context"
import { Wrapper } from "./CatalogItem.styles"
import { HiDownload } from "react-icons/hi"
import { BiAddToQueue } from "react-icons/bi"

const CatalogItem = ({ song }) => {
  const [{ queue, current }, setState] = useContext(Context)

  // const id = song.song_id
  const link = song.download_links
  const name = song.song_name
  const image = song.song_image
  const artist = song.song_artist

  function handleClick() {
    console.log("new: ", { queue: [song], current: 0 })
    setState({ queue: [song], current: 0 })
  }

  function addToQueue() {
    const newQueue = queue.concat(song)
    console.log("addtoqueue: ", { newQueue, current })
    setState({ queue: newQueue, current: current })
  }

  return (
    <Wrapper>
      <img src={image} alt="song img" onClick={handleClick} />
      <div>
        <p>{name.length > 35 ? `${name.substr(0, 35)}...` : name}</p>
        <p>{artist.length > 35 ? `${artist.substr(0, 35)}...` : artist}</p>
      </div>
      <div className="option">
        <button>
          <a
            href={link[0]}
            download={`${name}.mp3`}
            target="_blank"
            rel="noreferrer"
          >
            <HiDownload />
          </a>
        </button>
        <button onClick={addToQueue}>
          <BiAddToQueue id="addToQueue" />
        </button>
      </div>
    </Wrapper>
  )
}

export default CatalogItem
