import React, { useState } from "react"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { BsImage, BsImages } from "react-icons/bs"
import Image from "next/image"

// --INTERNAL IMPORTS
import Style from "./NFTCard.module.css"
import images from "../../img"

const NFTCard = () => {
  const featureArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  const [isLiked, setLike] = useState(false)

  const likeNft = () => {
    isLiked ? setLike(false) : setLike(true)
  }
  return (
    <div className={Style.NFTCard}>
      {featureArray.map((el, i) => (
        <div className={Style.NFTCard_box} key={i + 1}>
          <div className={Style.NFTCard_box_img}>
            <Image
              src={images.nft_image_1}
              alt="NFT images"
              width={600}
              height={600}
              className={Style.NFTCard_box_img_img}
            />
            <div className={Style.NFTCard_box_update}>
              <div className={Style.NFTCard_box_update_left}>
                <div
                  className={Style.NFTCard_box_update_left_like}
                  onClick={() => likeNft()}
                >
                  {isLiked ? (
                    <AiOutlineHeart />
                  ) : (
                    <AiFillHeart
                      className={Style.NFTCard_box_update_left_like_icon}
                    />
                  )}
                  {""} 22
                </div>
              </div>
            </div>
            <div className={Style.NFTCard_box_update_right}>
              <div className={Style.NFTCard_box_update_right_info}>
                <small>Remaining time</small>
                <p>3h : 15m : 20s</p>
              </div>
            </div>
          </div>
          <div className={Style.NFTCard_box_update_details}>
            <div className={Style.NFTCard_box_update_details_price}>
              <div className={Style.NFTCard_box_update_details_price_box}>
                <h4>Clone #2343535</h4>

                <div className={Style.NFTCard_box_update_details_price_box_box}>
                  <div
                    className={Style.NFTCard_box_update_details_price_box_bid}
                  >
                    <small>Current Bid</small>
                    <p>1 ETH</p>
                  </div>
                  <div
                    className={Style.NFTCard_box_update_details_price_box_stock}
                  >
                    <small>61 in stock</small>
                  </div>
                </div>
              </div>
            </div>
            <div className={Style.NFTCard_box_update_details_category}>
              <BsImages />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NFTCard
