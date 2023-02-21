import React, { useState, useEffect } from "react"
import Image from "next/image"
import { BsImages } from "react-icons/bs"
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineVideoCamera,
} from "react-icons/ai"
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti"

// --INTERNAL IMPORTS
import Style from "./NFTDetailsImg.module.css"
import images from "../../img"
import { NFTCardTwo } from "../../collectionPage/collectionIndex"

const NFTDetailsImg = ({ nft }) => {
  const [description, setDescription] = useState(false)
  const [details, setDetails] = useState(true)
  const [like, setLike] = useState(false)

  const openDescription = () => {
    description ? setDescription(false) : setDescription(true)
  }
  const openDetails = () => {
    details ? setDetails(false) : setDetails(true)
  }
  const likeNFT = () => {
    like ? setLike(false) : setLike(true)
  }

  // const collectablesArray = [
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  //   images.nft_image_1,
  //   images.nft_image_2,
  // ]

  return (
    <div className={Style.NFTDetailsImg}>
      <div className={Style.NFTDetailsImg_box}>
        <div className={Style.NFTDetailsImg_box_NFT}>
          <div className={Style.NFTDetailsImg_box_NFT_like}>
            <BsImages className={Style.NFTDetailsImg_box_NFT_like_icon} />
            <p onClick={() => likeNFT()}>
              {like ? (
                <AiFillHeart
                  className={Style.NFTDetailsImg_box_NFT_like_icon}
                />
              ) : (
                <AiOutlineHeart
                  className={Style.NFTDetailsImg_box_NFT_like_icon}
                />
              )}
              <span>22</span>
            </p>
          </div>

          <div className={Style.NFTDetailsImg_box_NFT_img}>
            <Image
              src={nft.image}
              // src={images.nft_image_1}
              className={Style.NFTDetailsImg_box_NFT_img_img}
              alt="nft image"
              width={700}
              height={800}
            />
          </div>
        </div>

        <div
          className={Style.NFTDetailsImg_box_description}
          onClick={() => openDescription()}
        >
          <p>Description</p>
          {description ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>

        {description && (
          <div className={Style.NFTDetailsImg_box_description_box}>
            <p>
              {nft.description}
              {/* lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod nunc eu nisl ultricies, nec ultricies nisl aliquet. Nulla
              facilisi. */}
            </p>
          </div>
        )}

        <div
          className={Style.NFTDetailsImg_box_details}
          onClick={() => openDetails()}
        >
          <p>Details</p>
          {details ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>

        {details && (
          <div className={Style.NFTDetailsImg_box_details_box}>
            <small>2000x2000</small>
            <p>
              <small>Contract Address</small>
              <br />
              {nft.seller}
            </p>
            <p>
              <small>Token ID: </small>
              <br />
              {nft.tokenId}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default NFTDetailsImg
