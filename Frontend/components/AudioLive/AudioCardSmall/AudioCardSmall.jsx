import React, { useState } from "react"
import Image from "next/image"
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb"

//--IMPORT LOCAL
import Style from "./AudioCardSmall.module.css"
import images from "../../../img"
import LikeProfile from "../../LikeProfile/LikeProfile"

const AudioCardSmall = ({ el, i }) => {
  const [play, setPlay] = useState(false)

  const playMusic = () => {
    play ? setPlay(false) : setPlay(true)
  }

  return (
    <div className={Style.audioPlayer}>
      <div className={Style.audioPlayer_box}>
        <Image
          // src={el}
          src={images.creatorbackground1}
          alt="music"
          width={100}
          height={100}
          className={Style.audioPlayer_box_img}
        />

        <div className={Style.audioPlayer_box_info}>
          <h4>NFT music #234</h4>
          <div className={Style.audioPlayer_box_info_box}>
            <LikeProfile />
            <div className={Style.audioPlayer_box_info_box_price}>
              <small>price</small>
              <p>1.00 E</p>
            </div>
          </div>
        </div>

        <div
          className={Style.audioPlayer_box_playBtn}
          onClick={() => playMusic()}
        >
          {play ? <TbPlayerPause /> : <TbPlayerPlay />}
        </div>
      </div>
    </div>
  )
}

export default AudioCardSmall
