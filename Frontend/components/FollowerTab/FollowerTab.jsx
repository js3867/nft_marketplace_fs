import React, { useState, useEffect } from "react"
import {
  RiUserFollowFill,
  RiUserUnfollowFill,
  RiAwardLine,
} from "react-icons/ri"

// --INTERNAL IMPORTS
import Style from "./FollowerTab.module.css"
import FollowerTabCard from "./FollowerTabCard/FollowerTabCard"
import image from "../../img"

const FollowerTab = () => {
  // these arrays can be stored in sep file/int server/etc
  const cardArray = [
    {
      background: image.creatorbackground1,
      user: image.user1,
    },
    {
      background: image.creatorbackground2,
      user: image.user2,
    },
    {
      background: image.creatorbackground3,
      user: image.user3,
    },
    {
      background: image.creatorbackground4,
      user: image.user4,
    },
    {
      background: image.creatorbackground5,
      user: image.user5,
    },
    {
      background: image.creatorbackground6,
      user: image.user6,
    },
    {
      background: image.creatorbackground7,
      user: image.user7,
    },
    {
      background: image.creatorbackground8,
      user: image.user8,
    },
    // image.user1,
    // image.user2,
    // image.user3,
    // image.user4,
    // image.user5,
    // image.user6,
    // image.user7,
    // image.user8,
  ]
  const followingArray = [
    {
      background: image.creatorbackground4,
      user: image.user4,
    },
    {
      background: image.creatorbackground5,
      user: image.user5,
    },
    {
      background: image.creatorbackground6,
      user: image.user6,
    },
    {
      background: image.creatorbackground7,
      user: image.user7,
    },
    {
      background: image.creatorbackground2,
      user: image.user2,
    },
    {
      background: image.creatorbackground3,
      user: image.user3,
    },
  ]
  const newsArray = [
    {
      background: image.creatorbackground1,
      user: image.user10,
    },
    {
      background: image.creatorbackground2,
      user: image.user9,
    },
    {
      background: image.creatorbackground4,
      user: image.user4,
    },
    {
      background: image.creatorbackground5,
      user: image.user5,
    },
    {
      background: image.creatorbackground3,
      user: image.user3,
    },
    {
      background: image.creatorbackground6,
      user: image.user6,
    },
    {
      background: image.creatorbackground7,
      user: image.user7,
    },
  ]

  const [popular, setPopular] = useState(true)
  const [following, setFollowing] = useState(false)
  const [news, setNews] = useState(false)

  const openPopular = () => {
    if (!popular) {
      setPopular(true)
      setFollowing(false)
      setNews(false)
    }
  }
  const openFollowing = () => {
    if (!following) {
      setPopular(false)
      setFollowing(true)
      setNews(false)
    }
  }
  const openNews = () => {
    if (!news) {
      setPopular(false)
      setFollowing(false)
      setNews(true)
    }
  }
  return (
    <div className={Style.followerTab}>
      <div className={Style.followerTab_title}>
        <h2>Top Creators</h2>
        <div className={Style.followerTab_tabs}>
          <div className={Style.followerTab_tabs_btn}>
            <button onClick={() => openPopular()}>
              <RiUserFollowFill />
              Popular
            </button>
            <button onClick={() => openFollowing()}>
              <RiUserFollowFill />
              Following
            </button>
            <button onClick={() => openNews()}>
              <RiAwardLine />
              News
            </button>
          </div>
        </div>
      </div>

      {popular && (
        <div className={Style.followerTab_box}>
          {cardArray.map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}

      {following && (
        <div className={Style.followerTab_box}>
          {followingArray.map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}

      {news && (
        <div className={Style.followerTab_box}>
          {newsArray.map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}

      <div className={Style.followerTab_member}>
        <div className={Style.followerTab_member_box}>
          <a href="#">Show me more</a>
          <a href="#">Become a creator</a>
        </div>
      </div>
    </div>
  )
}

export default FollowerTab
