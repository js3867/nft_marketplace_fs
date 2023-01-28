import React, { useState, useEffect } from "react"
import Image from "next/image"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb"

//--IMPORT LOCAL
import Style from "./AudioCard.module.css"
import images from "../../../img"
import LikeProfile from "../../LikeProfile/LikeProfile"

const AudioCard = () => {
  const [like, setLike] = useState(false)
  const [play, setPlay] = useState(false)

  const musiceArray = [
    images.creatorbackground10,
    images.creatorbackground9,
    images.creatorbackground8,
  ]

  const likeNft = () => {
    like ? setLike(false) : setLike(true)
  }
  const playMusic = () => {
    play ? setPlay(false) : setPlay(true)
  }

  return (
    <div className={Style.audioCard}>
      <div className={Style.audioCard_box}>
        <div className={Style.audioCard_box_like_time}>
          <div className={Style.audioCard_box_like} onClick={() => likeNft()}>
            {like ? (
              <AiFillHeart className={Style.audioCard_box_like_icon} />
            ) : (
              <AiOutlineHeart
                className={Style.audioCard_box_like_icon_unlike}
              />
            )}
            <span>24</span>
          </div>

          <div className={Style.audioCard_box_time}>
            <div className={Style.audioCard_box_time_remaining}>
              <small>Remaining Time</small>
              <h5>3h : 15m : 20s</h5>
            </div>
          </div>
        </div>

        <div className={Style.audioCard_box_player}>
          <Image src={images.musiceWave} alt="music" width={200} />
          <div
            className={Style.audioCard_box_musicPlayer}
            onClick={() => playMusic()}
          >
            {play ? (
              <TbPlayerPause className={Style.audioCard_box_musicPlayer_icon} />
            ) : (
              <TbPlayerPlay className={Style.audioCard_box_musicPlayer_icon} />
            )}
          </div>
        </div>

        <div className={Style.audioCard_box_details}>
          <div className={Style.audioCard_box_details_info}>
            <h4>NFT Music #1234</h4>
            <div className={Style.audioCard_box_details_info_price}>
              <small>Price</small>
              <p>$1,250.10</p>
            </div>
          </div>

          <div className={Style.audioCard_box_details_stock}>
            <LikeProfile />
            <small>24 in stock</small>
          </div>
        </div>

        <div className={Style.audioCard_box_details_img}>
          <Image
            src={images.creatorbackground10}
            alt="background"
            width={5000}
            height={500}
            className={Style.audioCard_box_details_img_background}
          />
        </div>
      </div>
    </div>
  )
}

export default AudioCard
