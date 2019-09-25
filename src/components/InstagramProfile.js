import React from "react";
import Img from "gatsby-image";
import Link from "gatsby-link";

const InstagramProfile = ({ profile }) => (
  <div className="Instagram__profile">
    <div className="Instagram__profile__image">
      <Img
        fixed={{ src: profile.profile_pic_url_hd, width: "120px", height: "120px" }}
        style={{ border: "1px solid rgba(0,0,0,.0975)", borderRadius: "50%" }}
      />
    </div>
    <div className="Instagram__profile__content">
      <div className="Instagram__profile__id">
        <span>{profile.full_name}</span>
        <div className="Instagram__profile__followme">
          <button className="Instagram__profile__button">Follow</button>
          <span>@{profile.username}</span>
        </div>
      </div>
      <span>{profile.biography}</span>
      <div>
        <span className="Instagram__profile__follow">
          {profile.edge_followed_by.count} followers
        </span>
        <span className="Instagram__profile__follow">{profile.edge_follow.count} following</span>
      </div>
    </div>
  </div>
);

export default InstagramProfile;
