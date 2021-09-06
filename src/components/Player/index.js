import React, { useContext, useEffect, useRef, useState } from "react"
import { Context } from "../../context"
import {
  MdPlayCircleOutline as Play,
  MdPauseCircleOutline as Pause,
  MdSkipNext,
} from "react-icons/md"

import { Wrapper, Content, Controls } from "./Player.styles"

const Player = () => {
  const [{ queue, current }, setState] = useContext(Context)
  const [playing, setPlaying] = useState(false)
  const audio = useRef(null)
  const seekbar = useRef(null)
  const quality = 1 //quality = [96, 160, 320]
  // const noImage = "https://a10.gaanacdn.com/images/gaanawebsite/albumdefaultcommonv1.jpg"

  function handlePlayback(event) {
    setPlaying((playing) => !playing)
  }

  function updateTime(event) {
    seekbar.current.value = event.currentTarget.currentTime
  }

  function seekAudio(event) {
    audio.current.currentTime = event.currentTarget.value
  }

  function songEnded(event) {
    setPlaying(false)
    //play next song
    if (current < queue.length - 1)
      setState((prevState) => ({ ...prevState, current: current + 1 }))
  }

  useEffect(() => {
    if (audio.current === null) return
    if (current === queue.length) return

    if (audio.current.src !== queue[current].download_links[quality]) {
      audio.current.src = queue[current].download_links[quality]
      setPlaying(true)
    }
  }, [queue, current])

  useEffect(() => {
    playing ? audio.current?.play() : audio.current?.pause()
  }, [playing])

  if (queue.length === 0) return null

  return (
    <Wrapper>
      <input
        ref={seekbar}
        type="range"
        className="seekbar"
        min="0"
        onChange={seekAudio}
        max={queue[current].song_duration}
      />
      <Content>
        <img src={queue[current].song_image} alt="current song img" />
        <p>{queue[current].song_name.substr(0,25)}</p>
        <audio
          ref={audio}
          autoPlay
          onTimeUpdate={updateTime}
          onEnded={songEnded}
        />
        <Controls>
          <button onClick={handlePlayback}>
            {playing ? <Pause size={28} title='Pause'/> : <Play size={28} title='Play'/>}
          </button>
          <button onClick={songEnded}>
            <MdSkipNext size={28} title='Next Song' />
          </button>
        </Controls>
      </Content>
    </Wrapper>
  )
}

export default Player
