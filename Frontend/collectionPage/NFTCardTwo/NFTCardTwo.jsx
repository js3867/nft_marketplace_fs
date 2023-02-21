import React, { useState } from "react"
import Image from "next/image"
import { BsImage } from "react-icons/bs"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { MdTimer, MdVerified } from "react-icons/md"
import Link from "next/link"

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
        <Link href={{ pathname: "/nft-details", query: el }} key={i + 1}>
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
                src={el.image}
                alt="NFT"
                width={500}
                height={500}
                style={{ layout: "fill", objectFit: "cover" }}
                className={Style.NFTCardTwo_box_img_img}
              />
            </div>
            <div className={Style.NFTCardTwo_box_info}>
              <div className={Style.NFTCardTwo_box_info_left}>
                <LikeProfile />
                <p>{el.name}</p>
              </div>
              <small>4{i + 1}</small>
            </div>
            <div className={Style.NFTCardTwo_box_price}>
              <div className={Style.NFTCardTwo_box_price_box}>
                <small>Curr. Bid</small>
                <p>{el.price} ETH</p>
              </div>
              <div className={Style.NFTCardTwo_box_price_stock}>
                <p>
                  <MdTimer />
                  <span>{i + 1} hours rem.</span>
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default NFTCardTwo
