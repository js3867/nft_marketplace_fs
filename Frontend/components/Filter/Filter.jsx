import React, { useState, useEffect } from "react"
import {
  FaFilter,
  FaAngleDown,
  FaAngleUp,
  FaWallet,
  FaMusic,
  FaVideo,
  FaImages,
  FaUserAlt,
  FaImage,
} from "react-icons/fa"
import { AiFillCloseCircle } from "react-icons/ai"
import { MdVerified } from "react-icons/md"
import { TiTick } from "react-icons/ti"
// ^^React icons: https://react-icons.github.io/react-icons/

//-----INTERNAL IMPORT
import Style from "./Filter.module.css"

const Filter = () => {
  const [filter, setFilter] = useState(true) // <<display filter options by default
  const [image, setImage] = useState(true)
  const [music, setMusic] = useState(true)
  const [video, setVideo] = useState(true)

  //----FUNCTION SECTION
  const openFilter = () => {
    if (!filter) {
      setFilter(true)
    } else {
      setFilter(false)
    }
  }

  const openImage = () => {
    if (!image) {
      setImage(true)
    } else {
      setImage(false)
    }
  }

  const openVideo = () => {
    if (!video) {
      setVideo(true)
    } else {
      setVideo(false)
    }
  }

  const openMusic = () => {
    if (!music) {
      setMusic(true)
    } else {
      setMusic(false)
    }
  }

  return (
    <div className={Style.filter}>
      <div className={Style.filter_box}>
        <div className={Style.filter_box_left}>
          <button onClick={() => {}}>NFTs</button>
          <button onClick={() => {}}>Art</button>
          <button onClick={() => {}}>Music</button>
          <button onClick={() => {}}>Sports</button>
          <button onClick={() => {}}>Photography</button>
        </div>
        <div className={Style.filter_box_right}>
          <div
            className={Style.filter_box_right_box}
            onClick={() => openFilter()}
          >
            <FaFilter />
            <span>Filter</span> {filter ? <FaAngleDown /> : <FaAngleUp />}
            {/* ^dynamic filter to open/close filter options */}
          </div>
        </div>
      </div>

      {filter && (
        <div className={Style.filter_box_items}>
          <div className={Style.filter_box_items_box}>
            <div className={Style.filter_box_items_box_item}>
              <FaWallet />{" "}
              <span style={{ color: "var(--main-bg-color)" }}>10 ETH</span>
              <AiFillCloseCircle />
            </div>
          </div>
          <div className={Style.filter_box_items_box}>
            <div
              className={Style.filter_box_items_box_item_trans}
              onClick={() => openImage()}
            >
              <FaImage /> <small>Images</small>
              {image ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>
          <div className={Style.filter_box_items_box}>
            <div
              className={Style.filter_box_items_box_item_trans}
              onClick={() => openVideo()}
            >
              <FaVideo /> <small>Videos</small>
              {video ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>

          <div className={Style.filter_box_items_box}>
            <div
              className={Style.filter_box_items_box_item_trans}
              onClick={() => openMusic()}
            >
              <FaMusic /> <small>Music</small>
              {music ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>

          <div className={Style.filter_box_items_box}>
            <div className={Style.filter_box_items_box_item}>
              <FaUserAlt />
              <span style={{ color: "var(--main-bg-color)" }}>Verified</span>
              <MdVerified />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Filter
