import React from "react"
import Image from "next/image"

//--INTERNAL IMPORTS
import Style from "../styles/NFTDetails.module.css"
import { Banner, NFTCardTwo } from "../collectionPage/collectionIndex"
import { Brand, Title } from "../components/componentsindex"
import {
  NFTDetailsPage,
  NFTDescription,
  NFTDetailsImg,
  NFTTabs,
} from "../NFTDetailsPage/NFTDetailsIndex"
import images from "../img"

const NFTDetails = () => {
  return (
    <div className={Style.NFTDetails}>
      <Banner bannerImage={images.creatorbackground2} />
      <div className={Style.NFTDetailsPage}>
        <div className={Style.NFTDetailsPage_box}>
          <div className={Style.NFTDetailsPage_box_left}>
            <NFTDetailsImg />
          </div>

          <div className={Style.NFTDetailsPage_box_right}>
            <NFTDescription />
            <NFTTabs />
          </div>
        </div>
      </div>
      <Brand />
    </div>
  )
}

export default NFTDetails
