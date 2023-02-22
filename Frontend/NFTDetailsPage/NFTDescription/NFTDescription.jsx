import React, { useState, useContext } from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import Link from "next/link"
import {
  MdVerified,
  MdCloudUpload,
  MdTimer,
  MdReportProblem,
  MdOutlineDeleteSweep,
} from "react-icons/md"
import { BsThreeDots } from "react-icons/bs"
import { FaWallet, FaPercentage } from "react-icons/fa"
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti"
import { BiTransferAlt, BiDollar } from "react-icons/bi"

//INTERNAL IMPORT
import Style from "./NFTDescription.module.css"
import images from "../../img"
import { Button } from "../../components/componentsindex.js"
import { NFTTabs } from "../NFTDetailsIndex" // for user to click between tabs in NFTDetailsPage

//--SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext"

const NFTDescription = ({ nft }) => {
  const [social, setSocial] = useState(false)
  const [NFTMenu, setNFTMenu] = useState(false)
  const [history, setHistory] = useState(true)
  const [provenance, setProvenance] = useState(false)
  const [owner, setOwner] = useState(false)

  const router = useRouter()

  const historyArray = [
    images.user1,
    images.user2,
    images.user3,
    images.user4,
    images.user5,
  ]
  const provenanceArray = [
    images.user6,
    images.user7,
    images.user8,
    images.user9,
    images.user10,
  ]
  const ownerArray = [
    images.user1,
    images.user8,
    images.user2,
    images.user6,
    images.user5,
  ]

  // Functions
  const openSocial = () => {
    if (!social) {
      setSocial(true)
      setNFTMenu(false)
    } else {
      setSocial(false)
    }
  }

  const openNFTMenu = () => {
    if (!NFTMenu) {
      setNFTMenu(true)
      setSocial(false)
    } else {
      setNFTMenu(false)
    }
  }

  const openTabs = (e) => {
    const btnText = e.target.innerText

    if (btnText == "Bid History") {
      setHistory(true)
      setProvenance(false)
      setOwner(false)
    } else if (btnText == "Provenance") {
      setHistory(false)
      setProvenance(true)
      setOwner(false)
    }
  }

  const openOwner = () => {
    if (!owner) {
      setOwner(true)
      setHistory(false)
      setProvenance(false)
    } else {
      setOwner(false)
      setHistory(true)
    }
  }

  //SMART CONTRACT DATA
  const { buyNFT, currentAccount } = useContext(NFTMarketplaceContext)

  return (
    <div className={Style.NFTDescription}>
      <div className={Style.NFTDescription_box}>
        {/* //Part ONE */}
        <div className={Style.NFTDescription_box_share}>
          <p>Virtual Worlds</p>
          {/* <p>{nft.collection}</p> */}
          <div className={Style.NFTDescription_box_share_box}>
            <MdCloudUpload
              className={Style.NFTDescription_box_share_box_icon}
              onClick={() => openSocial()} // opens socials icons for sharing
            />

            {social && (
              // && is a conditional operator that checks if the first condition is true, then it will perform the second condition
              <div className={Style.NFTDescription_box_share_box_social}>
                <a href="#">
                  <TiSocialFacebook /> Facebook
                </a>
                <a href="#">
                  <TiSocialInstagram /> Instragram
                </a>
                <a href="#">
                  <TiSocialLinkedin /> LinkedIn
                </a>
                <a href="#">
                  <TiSocialTwitter /> Twitter
                </a>
                <a href="#">
                  <TiSocialYoutube /> YouTube
                </a>
              </div>
            )}

            <BsThreeDots
              // click on the three dots icon to open the NFT menu
              className={Style.NFTDescription_box_share_box_icon}
              onClick={() => openNFTMenu()}
            />

            {NFTMenu && (
              <div className={Style.NFTDescription_box_share_box_social}>
                <a href="#">
                  <BiDollar /> Change price
                </a>
                <a href="#">
                  <BiTransferAlt /> Transfer
                </a>
                <a href="#">
                  <MdReportProblem /> Report abouse
                </a>
                <a href="#">
                  <MdOutlineDeleteSweep /> Delete item
                </a>
              </div>
            )}
          </div>
        </div>
        {/* //Part TWO */}
        <div className={Style.NFTDescription_box_profile}>
          <h1>
            {nft.name} #{nft.tokenId}
          </h1>
          {/* <h1>BearX #56456</h1> */}
          <div className={Style.NFTDescription_box_profile_box}>
            <div className={Style.NFTDescription_box_profile_box_left}>
              <Link href={{ pathname: "/author", query: `${nft.seller}` }}>
                <Image
                  src={images.user1}
                  alt="profile"
                  width={40}
                  height={40}
                  className={Style.NFTDescription_box_profile_box_left_img}
                />
                <div className={Style.NFTDescription_box_profile_box_left_info}>
                  <small>Creator</small> <br />
                  <span>
                    Karli Costa <MdVerified />
                  </span>
                </div>
              </Link>
            </div>

            <div className={Style.NFTDescription_box_profile_box_right}>
              <Image
                src={images.creatorbackground1}
                alt="profile"
                width={40}
                height={40}
                className={Style.NFTDescription_box_profile_box_left_img}
              />

              <div className={Style.NFTDescription_box_profile_box_right_info}>
                <small>Collection</small> <br />
                <span>
                  Monkey app <MdVerified />
                </span>
              </div>
            </div>
          </div>

          <div className={Style.NFTDescription_box_profile_bidding}>
            <p>
              <MdTimer /> <span>Auction ending in:</span>
            </p>

            <div className={Style.NFTDescription_box_profile_bidding_box_timer}>
              <div
                className={
                  Style.NFTDescription_box_profile_bidding_box_timer_item
                }
              >
                <p>2</p>
                <span>Days</span>
              </div>
              <div
                className={
                  Style.NFTDescription_box_profile_bidding_box_timer_item
                }
              >
                <p>22</p>
                <span>hours</span>
              </div>
              <div
                className={
                  Style.NFTDescription_box_profile_bidding_box_timer_item
                }
              >
                <p>45</p>
                <span>mins</span>
              </div>
              <div
                className={
                  Style.NFTDescription_box_profile_bidding_box_timer_item
                }
              >
                <p>12</p>
                <span>secs</span>
              </div>
            </div>

            <div className={Style.NFTDescription_box_profile_bidding_box_price}>
              <div
                className={
                  Style.NFTDescription_box_profile_bidding_box_price_bid
                }
              >
                <small>Current Bid</small>
                <p>
                  {nft.price} ETH <span>( ≈ $3,221.22)</span>
                </p>
              </div>

              <span>[96 in stock]</span>
            </div>

            <div
              className={Style.NFTDescription_box_profile_bidding_box_button}
            >
              {currentAccount == nft.seller.toLowerCase() ? (
                <p>You can't buy your own NFT</p>
              ) : currentAccount == nft.owner.toLowerCase() ? (
                <Button
                  icon=<FaWallet />
                  btnName="List on Marketplace"
                  handleClick={() =>
                    router.push(
                      `/reSellToken?id=${nft.tokenId}&tokenURI=${nft.tokenURI}&price=${nft.price}`
                    )
                  }
                  classStyle={Style.button}
                />
              ) : (
                <Button
                  icon=<FaWallet />
                  btnName="Buy NFT"
                  handleClick={() => buyNFT(nft)}
                  classStyle={Style.button}
                />
              )}

              <Button
                icon=<FaPercentage />
                btnName="Make offer"
                handleClick={() => {}}
                classStyle={Style.button}
              />
            </div>

            <div className={Style.NFTDescription_box_profile_bidding_box_tabs}>
              {/* pass 'e', the event */}
              <button onClick={(e) => openTabs(e)}>Bid History</button>
              <button onClick={(e) => openTabs(e)}>Provenance</button>
              <button onClick={() => openOwner()}>Owner</button>
            </div>

            {history && (
              <div
                className={Style.NFTDescription_box_profile_bidding_box_card}
              >
                <NFTTabs dataTab={historyArray} />
                {/* display history in NFTTab, passing array as props */}
              </div>
            )}
            {provenance && (
              <div
                className={Style.NFTDescription_box_profile_bidding_box_card}
              >
                <NFTTabs dataTab={provenanceArray} />
                {/* display provenance in NFTTab, passing array as props */}
              </div>
            )}

            {owner && (
              <div
                className={Style.NFTDescription_box_profile_bidding_box_card}
              >
                <NFTTabs dataTab={ownerArray} icon=<MdVerified /> />
                {/* display owner in NFTTab, passing prov array as props + verified icon */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NFTDescription
