import React, { useState } from "react"
import Image from "next/image"
import { TiArrowSortedUp, TiArrowSortedDown, TiTick } from "react-icons/ti"

//--INTERNAL IMPORTS
import Style from "./AuthorTabs.module.css"

const AuthorTabs = ({
  setCollectables,
  setCreated,
  setLike,
  setFollower,
  setFollowing,
}) => {
  const [openList, setOpenList] = useState(false)
  const [activeBtn, setActiveBtn] = useState(1)
  const [selectMenu, setSelectMenu] = useState("Most Recent")

  const listArray = [
    "Created by Admin",
    "Most Loved",
    "Most Discussed",
    "Most Viewed",
  ]

  const openDropDownList = () => {
    openList ? setOpenList(false) : setOpenList(true)
  }
  const openTab = (e) => {
    const btnText = e.target.innerText
    if (btnText == "Collectables") {
      setCollectables(true)
      setCreated(false)
      setLike(false)
      setFollowing(false)
      setFollower(false)
      setActiveBtn(1)
    } else if (btnText == "Created") {
      setCollectables(false)
      setCreated(true)
      setLike(false)
      setFollowing(false)
      setFollower(false)
      setActiveBtn(2)
    } else if (btnText == "Liked") {
      setCollectables(false)
      setCreated(false)
      setLike(true)
      setFollowing(false)
      setFollower(false)
      setActiveBtn(3)
    } else if (btnText == "Following") {
      setCollectables(false)
      setCreated(false)
      setLike(false)
      setFollowing(true)
      setFollower(false)
      setActiveBtn(4)
    } else if (btnText == "Followers") {
      setCollectables(false)
      setCreated(false)
      setLike(false)
      setFollowing(false)
      setFollower(true)
      setActiveBtn(5)
    }
  }

  return (
    <div className={Style.AuthorTabs}>
      <div className={Style.AuthorTabs_box}>
        <div className={Style.AuthorTabs_box_left}>
          <div className={Style.AuthorTabs_box_left_btn}>
            <button
              className={`${activeBtn == 1 ? Style.active : ""}`} // dynamic class allocation
              onClick={(e) => openTab(e)}
            >
              Collectables
            </button>
            <button
              className={`${activeBtn == 2 ? Style.active : ""}`} // dynamic class allocation
              onClick={(e) => openTab(e)}
            >
              Created
            </button>
            <button
              className={`${activeBtn == 3 ? Style.active : ""}`} // dynamic class allocation
              onClick={(e) => openTab(e)}
            >
              Liked
            </button>
            <button
              className={`${activeBtn == 4 ? Style.active : ""}`} // dynamic class allocation
              onClick={(e) => openTab(e)}
            >
              Following
            </button>
            <button
              className={`${activeBtn == 5 ? Style.active : ""}`} // dynamic class allocation
              onClick={(e) => openTab(e)}
            >
              Followers
            </button>
          </div>
        </div>

        <div className={Style.AuthorTabs_box_right}>
          <div
            className={Style.AuthorTabs_box_right_para}
            onClick={() => openDropDownList()}
          >
            <p>{selectMenu}</p>
            {openList ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </div>

          {openList && (
            <div className={Style.AuthorTabs_box_right_list}>
              {listArray.map((el, i) => (
                <div
                  key={i + 1}
                  onClick={() => setSelectMenu(el)}
                  className={Style.AuthorTabs_box_right_list_item}
                >
                  <p>{el}</p>
                  <span>{selectMenu == el && <TiTick />}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AuthorTabs
