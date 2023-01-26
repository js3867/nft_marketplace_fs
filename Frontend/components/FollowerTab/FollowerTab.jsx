import React, { useState, useEffect } from "react"
import {
  RiUserFollowFill,
  RiUserUnfollowFill,
  RiAwardLine,
} from "react-icons/ri"

// --INTERNAL IMPORTS
import Style from "./FollowerTab.module.css"
import FollowerTabCard from "./FollowerTabCard/FollowerTabCard"

const FollowerTab = () => {
  const [popular, setPopular] = useState(true)
  const [following, setFollowing] = useState(false)
  const [news, setNews] = useState(false)

  const cardArray = [1, 2, 3, 4, 5, 6, 7, 8]
  const followingArray = [1, 2, 3, 4, 5, 6]
  const newsArray = [1, 2, 3, 4, 5]

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
