import React from "react"
import Image from "next/image"

//INTERNAL IMPORT
import Style from "./HeroSection.module.css"
import { Button } from "../componentsindex"
import images from "../../img"

const HeroSection = () => {
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Discover, collect and sell NFTs 🌃</h1>
          <p>
            Discover the most funky-ass NFTs in the whole metaverse here for
            your perusal.
          </p>
          <Button btnName="Start your search" handleClick={() => {}} />
        </div>
        <div className={Style.heroSection_box_right}>
          <Image
            id="hero-img"
            src={images.hero}
            alt="Hero section"
            width={600}
            height={600}
            className={Style.heroSection_box_right_img} // << my effort to contain the image, then found the below in the sourcecode (not in video!)
            // className={Style.navbar_container_right_profile}
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
