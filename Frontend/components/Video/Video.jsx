import React from "react"
import Image from "next/image"

// --INTERNAL IMPORTS
import Style from "./Video.module.css"
import images from "../../img"

const Video = () => {
  return (
    <div className={Style.video}>
      <div className={Style.video_box}>
        <h1>
          <span>🎥</span> Videos
        </h1>
        <p>
          "You won't believe the crazy crazy things that happen in the world of
          NFTs and crypto. Check out our videos to see what we're talking
          about."{" "}
        </p>{" "}
        <p> (Copilot, 2023)</p>
        <div className={Style.video_box_frame}>
          <div className={Style.video_box_frame_left}>
            <Image
              src={images.NFTVideo}
              alt="video images"
              width={1920}
              height={1080}
              className={Style.video_box_frame_left_img}
            />
          </div>

          <div className={Style.video_box_frame_right}>Coming soon...</div>
        </div>
      </div>
    </div>
  )
}

export default Video
