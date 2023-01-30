import React, { useState, useEffect } from "react"
import Image from "next/image"

// --INTERNAL IMPORT
import Style from "../styles/author.module.css"
import { Banner, NFTCardTwo } from "../collectionPage/collectionIndex"
import { Brand, Title } from "../components/componentsindex"
import FollowerTabCard from "../components/FollowerTab/FollowerTabCard/FollowerTabCard"
import {
  AuthorProfileCard,
  AuthorTabs,
  AuthorNFTCardBox,
} from "../authorPage/authorcomponentindex"
import images from "../img/"

const author = () => {
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

  const [collectables, setCollectables] = useState(true)
  const [created, setCreated] = useState(false)
  const [like, setLike] = useState(false)
  const [follower, setFollower] = useState(false)
  const [following, setFollowing] = useState(false)

  return (
    <div className={Style.author}>
      <Banner bannerImage={images.creatorbackground2} />
      <AuthorProfileCard />
      <AuthorTabs
        setCollectables={setCollectables}
        setCreated={setCreated}
        setLike={setLike}
        setFollower={setFollower}
        setFollowing={setFollowing}
      />
      <AuthorNFTCardBox
        collectables={collectables}
        created={created}
        like={like}
        follower={follower}
        following={following}
      />
      <Title
        heading={"Popular Creators"}
        paragraph={"Click on the Link. May you have a good time."}
      />
      <div className={Style.author_box}>
        {followerArray.map((el, i) => (
          <FollowerTabCard i={i} el={el} />
        ))}
      </div>
      <Brand />
    </div>
  )
}

export default author
