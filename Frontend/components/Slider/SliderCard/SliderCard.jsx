import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

import Style from "./SliderCard.module.css"
import images from "../../../img"
import LikeProfile from "../../LikeProfile/LikeProfile"

const SliderCard = () => {
  return (
    <motion.div className={Style.sliderCard}>
      <div className={Style.sliderCard_box}>
        <motion.div className={Style.sliderCard_box_img}>
          <Image
            src={images.creatorbackground10}
            alt="slider profile"
            width={500}
            height={300}
            className={Style.sliderCard_box_img_img}
            // objectFit="cover"
          />
        </motion.div>
        <div className={Style.sliderCard_box_title}>
          <p>NFT Video #3451</p>
          <div className={Style.sliderCard_box_title_like}>
            {/* <LikeProfile /> */}
            <small>1 of 100</small>
          </div>
        </div>

        <div className={Style.sliderCard_box_price}>
          <div className={Style.sliderCard_box_price_box}>
            <small>Current bid</small>
            <p>0.001 ETH</p>
          </div>

          <div className={Style.sliderCard_box_price_time}>
            <small>Remaining time</small>
            <p>1d 2h 30m</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default SliderCard
