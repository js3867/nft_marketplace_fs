import React, { useState } from "react"

//--INTERNAL IMPORTS
import { Category, Brand } from "../components/componentsindex"
import NFTDetailsPage from "../NFTDetailsPage/NFTDetailsPage"

const NFTDetails = () => {
  const [nft, setNft] = useState({
    image: "",
    tokenId: "",
    name: "",
    owner: "",
    price: "",
    seller: "",
  })
  return (
    <div>
      <NFTDetailsPage nft={nft} />
      <Category />
      <Brand />
    </div>
  )
}

export default NFTDetails
