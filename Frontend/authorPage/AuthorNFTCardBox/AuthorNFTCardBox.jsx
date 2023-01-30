import React, { useState } from "react"

//--INTERNAL IMPORTS
import Style from "./AuthorNFTCardBox.module.css"
import images from "../../img/"
import { NFTCardTwo } from "../../collectionPage/collectionIndex"
import FollowerTabCard from "../../components/FollowerTab/FollowerTabCard/FollowerTabCard"

const AuthorNFTCardBox = ({
  collectables,
  created,
  like,
  follower,
  following,
}) => {
  const collectablesArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
  ]

  const createdArray = [
    images.nft_image_1,
    images.nft_image_3,
    images.nft_image_2,
    images.nft_image_1,
    images.nft_image_3,
    images.nft_image_2,
  ]

  const likeArray = [
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_1,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_2,
    images.nft_image_3,
  ]

  const followerArray = [
    {
      user: images.user1,
      background: images.creatorbackground1,
    },
    {
      user: images.user2,
      background: images.creatorbackground2,
    },
    {
      user: images.user3,
      background: images.creatorbackground3,
    },
    {
      user: images.user4,
      background: images.creatorbackground4,
    },
    {
      user: images.user3,
      background: images.creatorbackground3,
    },
    {
      user: images.user1,
      background: images.creatorbackground1,
    },
    {
      user: images.user4,
      background: images.creatorbackground4,
    },
    {
      user: images.user2,
      background: images.creatorbackground2,
    },
  ]

  const followingArray = [
    {
      user: images.user3,
      background: images.creatorbackground3,
    },
    {
      user: images.user4,
      background: images.creatorbackground4,
    },
    {
      user: images.user1,
      background: images.creatorbackground1,
    },
    {
      user: images.user2,
      background: images.creatorbackground2,
    },
    {
      user: images.user3,
      background: images.creatorbackground3,
    },
    {
      user: images.user1,
      background: images.creatorbackground1,
    },
    {
      user: images.user4,
      background: images.creatorbackground4,
    },
    {
      user: images.user2,
      background: images.creatorbackground2,
    },
  ]

  return (
    <div className={Style.AuthorNFTCardBox}>
      {collectables && <NFTCardTwo NFTData={collectablesArray} />}
      {created && <NFTCardTwo NFTData={createdArray} />}
      {like && <NFTCardTwo NFTData={likeArray} />}
      {follower && (
        <div className={Style.AuthorNFTCardBox_box}>
          {followerArray.map((el, i) => (
            <FollowerTabCard i={i} el={el} />
          ))}
        </div>
      )}
      {following && (
        <div className={Style.AuthorNFTCardBox_box}>
          {followingArray.map((el, i) => (
            <FollowerTabCard i={i} el={el} />
          ))}
        </div>
      )}
    </div>
  )
}

export default AuthorNFTCardBox
