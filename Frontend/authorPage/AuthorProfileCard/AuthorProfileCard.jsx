import React, { useState } from "react"
import Image from "next/image"
import {
  MdVerified,
  MdCloudUpload,
  MdOutlineReportProblem,
} from "react-icons/md"
import { FiCopy } from "react-icons/fi"
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti"
import { BsThreeDots } from "react-icons/bs"

// --INTERNAL IMPORT
import Style from "./AuthorProfileCard.module.css"
import images from "../../img"
import { Button } from "../../components/componentsindex"

const AuthorProfileCard = () => {
  const [share, setShare] = useState(false)
  const [report, setReport] = useState(false)

  // Functions
  const copyAddress = () => {
    const copyText = document.getElementById("myInput")

    copyText.select()
    navigator.clipboard.writeText(copyText.value)
  }

  const openShare = () => {
    if (share) {
      setShare(false)
    } else {
      setShare(true)
      setReport(false)
    }
  }
  const openReport = () => {
    if (report) {
      setReport(false)
    } else {
      setReport(true)
      setShare(false)
    }
  }

  return (
    <div className={Style.AuthorProfileCard}>
      <div className={Style.AuthorProfileCard_box}>
        <div className={Style.AuthorProfileCard_box_img}>
          <Image
            src={images.nft_image_1}
            className={Style.AuthorProfileCard_box_img_img}
            alt="NFT image"
            width={220}
            height={220}
          />
        </div>

        <div className={Style.AuthorProfileCard_box_info}>
          <h2>
            Dony Herrera
            <span>
              <MdVerified />
            </span>
          </h2>

          <div className={Style.AuthorProfileCard_box_info_address}>
            <input type="text" value="0x345345.....45d35t" id="myInput" />
            <FiCopy
              onClick={() => copyAddress()}
              className={Style.AuthorProfileCard_box_info_address_icon}
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quod, quia, voluptas quae voluptatem quibusdam
          </p>

          <div className={Style.AuthorProfileCard_box_info_social}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
          </div>
        </div>

        <div className={Style.AuthorProfileCard_box_share}>
          <Button btnName="Follow" handleClick={() => {}} />
          <MdCloudUpload
            onClick={() => openShare()}
            className={Style.AuthorProfileCard_box_share_icon}
          />

          {share && (
            <div className={Style.AuthorProfileCard_box_share_upload}>
              <p>
                <span>
                  <TiSocialFacebook />
                </span>
                Facebook
              </p>
              <p>
                <span>
                  <TiSocialInstagram />
                </span>
                Instagram
              </p>
              <p>
                <span>
                  <TiSocialLinkedin />
                </span>
                LinkedIn
              </p>
              <p>
                <span>
                  <TiSocialYoutube />
                </span>
                YouTube
              </p>
            </div>
          )}

          <BsThreeDots
            onClick={() => openReport()}
            className={Style.AuthorProfileCard_box_share_icon}
          />

          {report && (
            <p className={Style.AuthorProfileCard_box_share_report}>
              <span>
                <MdOutlineReportProblem />
              </span>
              Report Abuse
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default AuthorProfileCard
