import React, { useState, useEffect, useContext } from "react"
import { useRouter } from "next/router"

//--INTERNAL IMPORTS
import { Category, Brand } from "../components/componentsindex"
import NFTDetailsPage from "../NFTDetailsPage/NFTDetailsPage"

//--SMART CONTRACT
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext"

const NFTDetails = () => {
  const { currentAccount } = useContext(NFTMarketplaceContext)

  const [nft, setNft] = useState({
    image: "",
    tokenId: "",
    name: "",
    owner: "",
    price: "",
    seller: "",
  })

  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) return
    //^^^checking if data is ready in router/url
    setNft(router.query)
  }, [router.isReady])

  return (
    <div>
      <NFTDetailsPage nft={nft} currentAccount={currentAccount} />
      <Category />
      <Brand />
    </div>
  )
}

export default NFTDetails
