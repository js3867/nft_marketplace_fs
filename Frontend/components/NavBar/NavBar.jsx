import React, { useState, useEffect, useContext } from "react"
import Image from "next/image"
import Link from "next/link"

// React-icons https://react-icons.github.io/react-icons/
import { MdNotifications } from "react-icons/md"
import { BsSearch } from "react-icons/bs"
import { CgMenuLeft, CgMenuRight } from "react-icons/cg"

// INTERNAL IMPORT
import Style from "./NavBar.module.css"
import { Discover, HelpCenter, Notification, Profile, SideBar } from "./index"
import { Button } from "../componentsindex"
import images from "../../img/index" // note how images includes ALL exports

//--IMPORT FROM SMART CONTRACT
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext"

const NavBar = () => {
  //-----USESTATE COMPONENTS
  const [discover, setDiscover] = useState(false)
  const [help, setHelp] = useState(false)
  const [notification, setNotification] = useState(false)
  const [profile, setProfile] = useState(false)
  const [openSideMenu, setOpenSideMenu] = useState(false)

  const openMenu = (e) => {
    const btnText = e.target.innerText
    if (btnText == "Discover") {
      if (!discover) {
        setDiscover(true)
        setHelp(false)
        setNotification(false)
        setProfile(false)
      } else {
        setDiscover(false)
      }
    } else if (btnText == "Help Center") {
      if (!help) {
        setDiscover(false)
        setHelp(true)
        setNotification(false)
        setProfile(false)
      } else {
        setHelp(false)
      }
    }
  }

  const openNotification = () => {
    if (!notification) {
      setDiscover(false)
      setHelp(false)
      setNotification(true)
      setProfile(false)
    } else {
      setDiscover(false)
      setHelp(false)
      setNotification(false)
      setProfile(false)
    }
  }

  const openProfile = () => {
    if (!profile) {
      setDiscover(false)
      setHelp(false)
      setNotification(false)
      setProfile(true)
    } else {
      setProfile(false)
    }
  }

  const openSideBar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true)
    } else {
      setOpenSideMenu(false)
    }
  }

  // SMART CONTRACT SECTION
  const { currentAccount, connectWallet } = useContext(NFTMarketplaceContext)
  //^^state variables we want to recieve from the context export

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        {/* LEFT SECTION */}
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image
              src={images.logo}
              alt="NFT MARKETPLACE"
              width={100}
              height={100}
            />
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search NFT" />
              <BsSearch onClick={() => {}} className={Style.search_icon} />
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_discover}>
            {/* DISCOVER MENU */}
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>

          {/* HELP CENTER MENU */}
          <div className={Style.navbar_container_right_help}>
            <p onClick={(e) => openMenu(e)}>Help Center</p>
            {help && (
              <div className={Style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>

          {/* NOTIFICATION */}
          <div className={Style.navbar_container_right_notify}>
            <MdNotifications
              className={Style.notify}
              onClick={() => openNotification()}
            />
            {notification && <Notification />}
          </div>

          {/* CREATE BUTTON */}
          <div className={Style.navbar_container_right_button}>
            {currentAccount == "" ? (
              <Button btnName="Connect" handleClick={() => connectWallet()} />
            ) : (
              <a href="/uploadNFT">
                <Button btnName="Create" handleClick={() => {}} />
              </a>
            )}
          </div>

          {/* USER PROFILE */}

          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image
                src={images.user1}
                alt="Profile"
                width={40}
                height={40}
                onClick={() => openProfile()}
                className={Style.navbar_container_right_profile}
              />

              {/* "if profile, we have to render the profile component" */}
              {profile && <Profile />}
            </div>
          </div>

          {/* MENU BUTTON -- mobile */}
          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight
              className={Style.menuIcon}
              onClick={() => openSideBar()}
            />
          </div>
        </div>
      </div>

      {/* SIDEBAR COMPONENT -- only mobile (hence "out of inner-component") */}
      {openSideMenu && (
        <div className={Style.sideBar}>
          <SideBar setOpenSideMenu={setOpenSideMenu} />
        </div>
      )}
    </div>
  )
}
export default NavBar
