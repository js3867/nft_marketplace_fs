import React, { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion" // npm i framer-motion https://www.framer.com/motion/
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti"
import Image from "next/image"

// --INTERNAL IMPORT
import Style from "./Slider.module.css"
import SliderCard from "./SliderCard/SliderCard"
import images from "../../img"

const Slider = () => {
  const sliderArray = [1, 2, 3, 4, 5, 6]
  const [width, setWidth] = useState(0)
  const dragSlider = useRef()

  useEffect(() => {
    setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth)
  }, [])

  const handleScroll = (direction) => {
    const { current } = dragSlider
    const scrollAmount = window.innerWidth > 1800 ? 270 : 210

    direction === "left"
      ? (current.scrollLeft -= scrollAmount)
      : (current.scrollLeft += scrollAmount)
  }

  return (
    <div className={Style.slider}>
      <div className={Style.slider_box}>
        <h2>Explore NFT Video</h2>
        <div className={Style.slider_box_button}>
          <p>Click on play icon to preview</p>
          <div className={Style.slider_box_button_btn}>
            <div
              className={Style.slider_box_button_btn_icon}
              onClick={() => handleScroll("left")}
            >
              <TiArrowLeftThick />
            </div>
            <div
              className={Style.slider_box_button_btn_icon}
              onClick={() => handleScroll("right")}
            >
              <TiArrowRightThick />
            </div>
          </div>
        </div>

        <motion.div className={Style.slider_box_items} ref={dragSlider}>
          <motion.div
            ref={dragSlider}
            className={Style.slider_box_item}
            drag="x"
            dragContraints={{ right: 0, left: -width }}
          >
            {sliderArray.map((el, i) => (
              <SliderCard key={i + 1} el={el} i={i} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Slider
