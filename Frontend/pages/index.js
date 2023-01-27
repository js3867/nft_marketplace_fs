import React from "react"

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
  //
  Brand,
} from "../components/componentsindex"

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title
        heading="New Sounds"
        paragraph="Search for NFTs by name, category, price, and more"
      />
      <AudioLive />
      <Title
        heading="New NFT Collections"
        paragraph="Search for NFTs by name, category, price, and more"
      />
      <Collection />
      <FollowerTab />
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
    </div>
  )
}

export default Home
