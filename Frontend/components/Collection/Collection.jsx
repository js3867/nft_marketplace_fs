import React, { useState, useEffect } from "react"
import {
  BsFillAlarmFill,
  BsCalendar3,
  BsCalendarDateFill,
} from "react-icons/bs"

// --INTERNAL IMPORTS
import Style from "./Collection.module.css"
import DaysComponents from "./DaysComponents/DaysComponents"

const Collection = () => {
  const [popular, setPopular] = useState(true)
  const [following, setFollowing] = useState(false)
  const [news, setNews] = useState(false)

  const cardArray = [1, 2, 3, 4, 5, 6, 7, 8]
  const followingArray = [1, 2, 3, 4]
  const newsArray = [1, 2, 3, 4, 5, 6]

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
    <div className={Style.collection}>
      <div className={Style.collection_title}>
        <h2>Top List Creators</h2>
        <div className={Style.collection_collections}>
          <div className={Style.collection_collections_btn}>
            <button onClick={() => openPopular()}>
              <BsFillAlarmFill />
              24 Hours
            </button>
            <button onClick={() => openFollowing()}>
              <BsCalendar3 />7 Days
            </button>
            <button onClick={() => openNews()}>
              <BsCalendarDateFill />
              30 Days
            </button>
          </div>
        </div>
      </div>

      {/* if popular && ...and what?? */}
      {popular && (
        <div className={Style.collection_box}>
          {cardArray.map((el, i) => (
            <DaysComponents key={i + 1} />
          ))}
        </div>
      )}

      {following && (
        <div className={Style.collection_box}>
          {followingArray.map((el, i) => (
            <DaysComponents key={i + 1} />
          ))}
        </div>
      )}

      {news && (
        <div className={Style.collection_box}>
          {newsArray.map((el, i) => (
            <DaysComponents key={i + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Collection
