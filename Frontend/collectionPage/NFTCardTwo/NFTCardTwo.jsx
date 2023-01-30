import React, { useState } from "react"
import Image from "next/image"
import { BsImage } from "react-icons/bs"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { MdTimer, MdVerified } from "react-icons/md"

// --INTERNAL IMPORT
import Style from "./NFTCardTwo.module.css"
import { LikeProfile } from "../../components/componentsindex"

const NFTCardTwo = ({ NFTData }) => {
  const [like, setLike] = useState(false)
  const [likeInc, setLikeInc] = useState(21)

  const likeNFT = () => {
    like
      ? setLike(false) & setLikeInc(likeInc - 1)
      : setLike(true) & setLikeInc(likeInc + 1)
  }

  return (
    <div className={Style.NFTCardTwo}>
      {NFTData.map((el, i) => (
        <div className={Style.NFTCardTwo_box} key={i + 1}>
          <div className={Style.NFTCardTwo_box_like}>
            <div className={Style.NFTCardTwo_box_like_box}>
              <div className={Style.NFTCardTwo_box_like_box_box}>
                <BsImage className={Style.NFTCardTwo_box_like_box_box_icon} />
                <p onClick={() => likeNFT()}>
                  {like ? <AiFillHeart /> : <AiOutlineHeart />}
                  <span>{likeInc + 1}</span>
                </p>
              </div>
            </div>
          </div>

          <div className={Style.NFTCardTwo_box_img}>
            <Image
              className={Style.NFTCardTwo_box_img_img}
              style={{ layout: "fill", objectFit: "cover" }}
              src={el}
              alt="NFT"
              width={500}
              height={500}
            />
          </div>

          <div className={Style.NFTCardTwo_box_info}>
            <div className={Style.NFTCardTwo_box_info_left}>
              <LikeProfile />
              <p>Clone #{i + 1}</p>
            </div>
            <small>4{i + 1}</small>
          </div>

          <div className={Style.NFTCardTwo_box_price}>
            <div className={Style.NFTCardTwo_box_price_box}>
              <small>Curr. Bid</small>
              <p>{i + 5}.00 E</p>
            </div>
            <div className={Style.NFTCardTwo_box_price_stock}>
              <p>
                <MdTimer />
                <span>{i + 1} hours rem.</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NFTCardTwo
