import React, { useState, useEffect, useContext } from "react"

//--INTERNAL IMPORTS
import Style from "../styles/search.module.css"
import { Slider, Brand, Filter } from "../components/componentsindex"
import { SearchBar } from "../searchPage/searchBarindex"
import { Banner, NFTCardTwo } from "../collectionPage/collectionIndex"
import images from "../img"

//--SMART CONTRACT
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext"

const search = () => {
  // replace this for NFTs from the smart contract
  // const collectionArray = [
  //   images.nft_image_2,
  //   ...
  // ]
  const { fetchNFTs } = useContext(NFTMarketplaceContext)
  const [nfts, setNfts] = useState([])
  const [nftsCopy, setNftsCopy] = useState([]) // for filter purpose, preserve og array

  useEffect(() => {
    try {
      fetchNFTs().then((items) => {
        setNfts(items.reverse())
        setNftsCopy(items)
      })
    } catch (error) {
      "Please reload the browser", error
    }
  }, [])

  const onHandleSearch = (value) => {
    const filteredNFTS = nfts.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    )

    if (filteredNFTS.length === 0) {
      setNfts(nftsCopy)
    } else {
      setNfts(filteredNFTS)
    }
  }

  const onClearSearch = () => {
    if (nfts.length && nftsCopy.length) {
      setNfts(nftsCopy)
    }
  }

  return (
    <div className={Style.search}>
      <Banner bannerImage={images.creatorbackground5} />
      <SearchBar
        onHandleSearch={onHandleSearch}
        onClearSearch={onClearSearch}
      />
      <Filter />
      <NFTCardTwo NFTData={nfts} />
      <Slider />
      <Brand />
    </div>
  )
}

export default search
