import React, { useContext } from "react"
import { Context } from "../../context"
import { Wrapper } from "./CatalogItem.styles"
import { HiDownload } from "react-icons/hi"

const CatalogItem = ({ song }) => {
  const [_state, setState] = useContext(Context)

  // const id = song.song_id
  const link = song.download_links
  const name = song.song_name
  const image = song.song_image
  const artist = song.song_artist

  function handleClick() {
    setState(song)
  }

  return (
    <Wrapper>
      <img src={image} alt="song img" onClick={handleClick} />
      <div>
        <p>{name.length > 35 ? `${name.substr(0, 35)}...` : name}</p>
        <p>{artist.length > 35 ? `${artist.substr(0, 35)}...` : artist}</p>
      </div>
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
    </Wrapper>
  )
}

export default CatalogItem
