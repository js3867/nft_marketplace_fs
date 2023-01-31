import React from "react"

//--INTERNAL IMPORTS
import Style from "../styles/search.module.css"
import { Slider, Brand, Filter } from "../components/componentsindex"
import { SearchBar } from "../searchPage/searchBarindex"
// import Filter from "../components/Filter/Filter" << don't want to indi. import this time
import { Banner, NFTCardTwo } from "../collectionPage/collectionIndex"
import images from "../img"

const collectionArray = [
  images.nft_image_2,
  images.nft_image_1,
  images.nft_image_3,
  images.nft_image_2,
  images.nft_image_1,
  images.nft_image_3,
  images.nft_image_2,
  images.nft_image_1,
]

const search = () => {
  return (
    <div className={Style.search}>
      <Banner bannerImage={images.creatorbackground5} />
      <SearchBar />
      <Filter />
      <NFTCardTwo NFTData={collectionArray} />
      <Slider />
      <Brand />
    </div>
  )
}

export default search
