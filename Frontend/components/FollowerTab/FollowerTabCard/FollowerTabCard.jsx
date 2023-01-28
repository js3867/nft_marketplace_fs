import React, { useState } from "react"
import Image from "next/image"
import { MdVerified, MdVerifiedUser } from "react-icons/md"
import { TiTick } from "react-icons/ti"

// --INTERNAL IMPORTS
import Style from "./FollowerTabCard.module.css"

const FollowerTabCard = ({ i, el }) => {
  const [following, setFollowing] = useState(true)

  const followMe = () => {
    following ? setFollowing(false) : setFollowing(true)
  }

  return (
    <div className={Style.followerTabCard}>
      <div className={Style.followerTabCard_rank}>
        <p>
          #{i + 1}
          <span>🥇</span>
        </p>
      </div>

      <div className={Style.followerTabCard_box}>
        <div className={Style.followerTabCard_box_img}>
          <Image
            className={Style.followerTabCard_box_img_img}
            src={el.background}
            alt="profile background"
            width={500}
            height={300}
          />
        </div>

        <div className={Style.followerTabCard_box_profile}>
          <Image
            className={Style.followerTabCard_box_profile_img}
            src={el.user}
            alt="profile picture"
            width={50}
            height={50}
          />
        </div>

        <div className={Style.followerTabCard_box_info}>
          <div className={Style.followerTabCard_box_info_name}>
            <h4>
              Giada Mann{""}{" "}
              <span>
                <MdVerified />
              </span>
            </h4>
            <p>12.32 ETH</p>
          </div>

          <div className={Style.followerTabCard_box_info_following}>
            {following ? (
              <a onClick={() => followMe()}>Follow{""}</a>
            ) : (
              <a onClick={() => followMe()}>
                Following{""}{" "}
                <span>
                  <TiTick />
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FollowerTabCard
