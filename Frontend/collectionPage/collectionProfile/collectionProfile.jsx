import React from "react"
import Image from "next/image"
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti"

//--INTERNAL IMPORT
import Style from "./collectionProfile.module.css"
import images from "../../img"

const collectionProfile = () => {
  const cardArray = [1, 2, 3, 4]
  return (
    <div className={Style.collectionProfile}>
      <div className={Style.collectionProfile_box}>
        <div className={Style.collectionProfile_box_left}>
          <Image
            src={images.nft_image_3}
            alt="nft image"
            width={800}
            height={800}
            className={Style.collectionProfile_box_left_img}
          />

          <div className={Style.collectionProfile_box_left_social}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
          </div>
        </div>

        <div className={Style.collectionProfile_box_middle}>
          <h1>Awesome NFT collections</h1>
          <p>
            wait - compiling... event - compiled client and server successfully
            in 107 ms (865 modules) warn - Fast Refresh had to perform a full
            reload when sth changed. This is not a bug. It's a feature. I swear.
          </p>

          <div className={Style.collectionProfile_box_middle_box}>
            {cardArray.map((el, i) => (
              <div
                className={Style.collectionProfile_box_middle_box_item}
                key={i + 1}
                el={el}
                i={i}
              >
                <small>Floor Price</small>
                <p>${i + 1}98,234</p>
                <span>+{i + 2}.11%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default collectionProfile
