import React from "react"
import { Wrapper } from "./QueueList.styles"
import {MdPlayCircleOutline as Play} from "react-icons/md"

const QueueList = ({ index, current, callback, children }) => {
  return (
    <Wrapper isPlaying={index === current} onClick={() => callback(index)}>
      <img src={children.song_image} alt="song thumb" />
      <div>
        <p>{children.song_name.substr(0, 30)}</p>
        <p>{children.song_artist.substr(0, 30)}</p>
      </div>
      {index===current &&<div className='status'>
      <Play size={28}  />
      </div> }
    </Wrapper>
  )
}

export default QueueList
