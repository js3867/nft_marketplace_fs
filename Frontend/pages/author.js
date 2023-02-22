import React, { useState, useEffect, useContext } from "react"
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

// --SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext"

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

  //------------------SMART CONTRACT------------------
  const { fetchMyNFTsOrListedNFTs, currentAccount } = useContext(
    NFTMarketplaceContext
  )
  const [nfts, setNfts] = useState([])
  const [myNfts, setMyNfts] = useState([])

  useEffect(() => {
    fetchMyNFTsOrListedNFTs("fetchItemsListed").then((items) => {
      // we use then() to get the items from the promise
      setMyNfts(items)
    })
  }, [])

  useEffect(() => {
    fetchMyNFTsOrListedNFTs("fetchMyNFTs").then((items) => {
      // we use then() to get the items from the promise
      setNfts(items)
    })
  }, [])

  return (
    <div className={Style.author}>
      <Banner bannerImage={images.creatorbackground2} />
      <AuthorProfileCard currentAccount={currentAccount} />
      <AuthorTabs
        currentAccount={currentAccount}
        setCollectables={setCollectables}
        setCreated={setCreated}
        setLike={setLike}
        setFollower={setFollower}
        setFollowing={setFollowing}
      />
      <AuthorNFTCardBox
        currentAccount={currentAccount}
        collectables={collectables}
        created={created}
        like={like}
        follower={follower}
        following={following}
        nfts={nfts}
        myNfts={myNfts}
      />
      <Title
        heading={"Popular Creators"}
        paragraph={"Click on the Link. May you have a good time."}
      />
      <div className={Style.author_box}>
        {followerArray.map((el, i) => (
          <FollowerTabCard i={i} el={el} key={i + 1} />
        ))}
      </div>
      <Brand />
    </div>
  )
}

export default author
