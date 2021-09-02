import React, { useContext, useEffect, useMemo, useRef, useState } from "react"
import { Context } from "../../context"

import { Wrapper, Content, Controls } from "./Player.styles"

const Player = () => {
  const [state] = useContext(Context)
  const audio = useMemo(
    () => new Audio(typeof state !== "undefined" && state.download_links[0]),
    [state]
  )
  const [playing, setPlaying] = useState(false)
  // const audio = useRef(null)
  const noImage =
    "https://a10.gaanacdn.com/images/gaanawebsite/albumdefaultcommonv1.jpg"

  function handlePlayback(event) {
    setPlaying((playing) => !playing)
  }

  useEffect(() => {
    playing ? audio.play() : audio.pause()
  }, [playing, audio])

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false))
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false))
    }
  }, [audio])

  // useEffect(() => {
  //   if (typeof state !== "undefined") {
  //     console.log(state)
  //     setAudio(new Audio(state.download_links[0]))
  //   }
  // }, [state])

  if (state === undefined) return null

  return (
    <Wrapper>
      <Content>
        <img src={state.song_image} alt="current song img" />
        <p>{state.song_name}</p>
        {/* <audio ref={audio} src={state.download_links[0]} autoPlay /> */}
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
