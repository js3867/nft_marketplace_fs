import React from "react"
import { BsSearch, BsArrowRight } from "react-icons/bs"

//--INTERNAL IMPORTS
import Style from "./searchBar.module.css"

const SearchBar = () => {
  return (
    <div className={Style.SearchBar}>
      <div className={Style.SearchBar_box}>
        <BsSearch className={Style.SearchBar_box_icon} />
        <input type={"text"} placeholder="Enter your search..." />
        <BsArrowRight className={Style.SearchBar_box_icon} />
      </div>
    </div>
  )
}

export default SearchBar
