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
} from "../components/componentsindex"

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title
        heading="Browse by Category"
        paragraph="Explore the NFTs by category"
      />
      <Category />
      <Subscribe />
    </div>
  )
}

export default Home
