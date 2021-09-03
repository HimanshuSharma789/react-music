import React, { useContext, useEffect, useRef, useState } from "react"
import { Context } from "../../context"

import { Wrapper, Content, Controls } from "./Player.styles"

// play/pause
// current time

const Player = () => {
  const [state] = useContext(Context)
  const [playing, setPlaying] = useState(false)
  const audio = useRef(null)
  const seekbar = useRef(null)
  const noImage =
    "https://a10.gaanacdn.com/images/gaanawebsite/albumdefaultcommonv1.jpg"

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
  }

  useEffect(() => {
    if (audio.current === null) return
    seekbar.current.value = 0
    audio.current.src = state.download_links[0]
    setPlaying(true)
  }, [state])

  useEffect(() => {
    playing ? audio.current?.play() : audio.current?.pause()
  }, [playing])

  if (state === undefined) return null

  return (
    <Wrapper>
      <input
        ref={seekbar}
        type="range"
        className="seekbar"
        min="0"
        onChange={seekAudio}
        max={state.song_duration}
      />
      <Content>
        <img src={state ? state.song_image : noImage} alt="current song img" />
        <p>{state ? state.song_name : "No song playing"}</p>
        <audio
          ref={audio}
          autoPlay
          onTimeUpdate={updateTime}
          onEnded={songEnded}
        />
        <Controls>
          {/* <button className="prev" /> */}
          <button
            className={`status ${playing ? "pause" : ""}`}
            onClick={handlePlayback}
          />
          {/* <button className="next" /> */}
        </Controls>
      </Content>
    </Wrapper>
  )
}

export default Player
