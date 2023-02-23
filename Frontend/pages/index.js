import React, { useState, useEffect, useContext } from "react"

// INTERNAL IMPORT
import Style from "../styles/index.module.css"
import {
  HeroSection,
  Service,
  BigNFTSlider,
  Subscribe,
  Title,
  Category,
  Filter,
  NFTCard,
  Collection,
  FollowerTab,
  AudioLive,
  Slider,
  Brand,
  Video,
} from "../components/componentsindex"

//--IMPORT CONTRACT DATA
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext"

const Home = () => {
  const { checkIfWalletConnected, currentAccount } = useContext(
    NFTMarketplaceContext
  )
  useEffect(() => {
    checkIfWalletConnected()
  }, [])

  const { fetchNFTs } = useContext(NFTMarketplaceContext)
  const [nfts, setNfts] = useState([])
  const [nftsCopy, setNftsCopy] = useState([])

  useEffect(() => {
    if (currentAccount) {
      fetchNFTs().then((item) => {
        setNfts(item.reverse())
        setNftsCopy(item)
      })
    }
  }, [])

  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title
        heading="Find the new sound, man"
        paragraph="Search for NFTs by name, category, price, and more"
      />
      <AudioLive />
      <Title
        heading="Explore NFT Collections"
        paragraph="Search for NFTs by name, category, price, and more"
      />
      <Collection />
      <FollowerTab />
      <Slider />
      <Title
        heading="Featured NFTs"
        paragraph="Search for NFTs by name, category, price, and more"
      />
      <Filter />
      <NFTCard />
      <Title
        heading="Browse by Category"
        paragraph="Explore the NFTs by category"
      />
      <Category />
      <Subscribe />
      <Brand />
      <Video />
    </div>
  )
}

export default Home
