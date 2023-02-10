import React, { useState, useEffect } from "react"
import Image from "next/image"

// INTERNAL IMPORTS
import Style from "../styles/connectWallet.module.css"
import images from "../img"

const connectWallet = () => {
  const [activeBtn, setActiveBtn] = useState(1)
  const providerArray = [
    {
      provider: images.provider1,
      name: "MetaMask",
    },
    {
      provider: images.provider2,
      name: "Wallet Connect",
    },
    {
      provider: images.provider3,
      name: "Trust Wallet",
    },
    {
      provider: images.provider1,
      name: "Wolf Wallet",
    },
  ]
  return (
    <div className={Style.connectWallet}>
      <div className={Style.connectWallet_box}>
        <h1>Connect your wallet</h1>
        <p className={Style.connectWallet_box_para}>
          Connect with one of your available wallet providers or create a new
          one.
        </p>

        <div className={Style.connectWallet_box_provider}>
          {providerArray.map((el, i) => (
            <div
              // make a dynamic array for applying multiple styles (non-active, active)
              className={`${Style.connectWallet_box_provider_item} ${
                activeBtn == i + 1 ? Style.active : ""
              }`}
              // if active button is clicked,
              key={i + 1}
              onClick={() => setActiveBtn(i + 1)}
            >
              <Image
                src={el.provider}
                alt={el.provider}
                width={50}
                height={50}
                className={Style.connectWallet_box_provider_item_img}
              />
              <p>{el.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default connectWallet
