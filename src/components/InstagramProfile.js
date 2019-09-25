import React from "react";
import Img from "gatsby-image";
import Link from "gatsby-link";

const InstagramProfile = ({ profile }) => (
  <div className="Instagram__profile">
    <div className="Instagram__profile__image">
      <Img fixed={{ src: profile.profile_pic_url_hd, width: "180px", height: "180px" }} style={{border: "1px solid rgba(0,0,0,.0975)", borderRadius: "50%"}}/>
    </div>
    <div className="Instagram__profile__content">
      <div className="Instagram__profile__name">
        <span>
          {profile.full_name} @{profile.username}
        </span>
        <button className="Instagram__profile__button">Follow</button>
      </div>
      <span>{profile.biography}</span>
      <div className="Instagram__profile__follow">
        <span>{profile.edge_followed_by.count} followers</span>
        <span>{profile.edge_follow.count} following</span>
      </div>
    </div>
  </div>
);

export default InstagramProfile;
