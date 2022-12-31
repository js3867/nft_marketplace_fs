import React from "react"

// INTERNAL IMPORT
import Style from "./Button.module.css"

// receive 2 props: name of button and the function to act on button
const Button = ({ btnName, handleClick }) => {
  return (
    <div className={Style.box}>
      <button className={Style.button} onClick={handleClick()}>
        {btnName}
      </button>
    </div>
  )
}

export default Button
