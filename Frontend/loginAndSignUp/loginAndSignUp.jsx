import React, { useState } from "react"
import Image from "next/image"

//INTERNALIMPORT
import Style from "./loginAndSignUp.module.css"
import images from "../img"
import { Button } from "../components/componentsindex.js"

const loginAndSignUp = () => {
  const [activeBtn, setActiveBtn] = useState(1)

  const socialImage = [
    {
      social: images.facebook,
      name: "Continue with Facebook",
    },
    {
      social: images.twitter,
      name: "Continue with twitter",
    },
    {
      social: images.facebook,
      name: "Continue with Facebook",
    },
  ]
  return (
    <div className={Style.user}>
      <div className={Style.user_box}>
        <div className={Style.user_box_social}>
          {socialImage.map((el, i) => (
            <div
              // make a dynamic array for applying multiple styles (non-active, active)
              className={`${Style.user_box_social_item} ${
                activeBtn == i + 1 ? Style.active : ""
              }`}
              // if active button is clicked,
              key={i + 1}
              onClick={() => setActiveBtn(i + 1)}
            >
              <Image
                src={el.social}
                alt={el.name}
                width={30}
                height={30}
                className={Style.user_box_social_item_img}
              />
              <p>
                <span>{el.name}</span>
              </p>
            </div>
          ))}
        </div>
        <p className={Style.user_box_or}>OR</p>

        <div className={Style.user_box_input}>
          <div className={Style.user_box_input_box}>
            <label htmlFor="email">Email address</label>
            <input type="email" placeholder="example@emample.com" />
          </div>

          <div className={Style.user_box_input_box}>
            <label
              htmlFor="password"
              className={Style.user_box_input_box_label}
            >
              <p>Password</p>
              <p>
                <a href="#">Forget password</a>
              </p>
            </label>
            <input type="password" />
          </div>
        </div>

        <Button
          handleClick={() => {}}
          btnName="Continue"
          classStyle={Style.button}
        />
      </div>
    </div>
  )
}

export default loginAndSignUp
