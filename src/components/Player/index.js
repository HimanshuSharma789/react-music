import React, { useContext, useEffect, useRef, useState } from "react"
import { Context } from "../../context"

import { Wrapper, Content, Controls } from "./Player.styles"

// play/pause
// current time

const Player = () => {
  const [state] = useContext(Context)
  const [playing, setPlaying] = useState(true)
  const [time, setTime] = useState(0)
  const audio = useRef(null)
  const seekbar = useRef(null)
  const noImage =
    "https://a10.gaanacdn.com/images/gaanawebsite/albumdefaultcommonv1.jpg"

  function handlePlayback(event) {
    setPlaying((playing) => !playing)
  }

  function updateTime(event) {
    setTime(event.currentTarget.currentTime)
  }

  function seekAudio(event) {
    audio.current.currentTime = event.currentTarget.value
  }

  useEffect(() => {
    if (audio.current === null) return
    playing ? audio.current.play() : audio.current.pause()
  }, [playing])

  useEffect(() => {
    if (audio.current === null) return
    audio.current.addEventListener("ended", () => setPlaying(false))
    audio.current.addEventListener("playing", () => setPlaying(true))
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false))
      audio.removeEventListener("playing")
    }
  }, [])

  if (state === undefined) return null

  return (
    <Wrapper>
      <input
        ref={seekbar}
        type="range"
        value={time}
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
          src={state.download_links[0]}
          autoPlay
          onTimeUpdate={updateTime}
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
