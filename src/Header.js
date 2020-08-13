import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
const Header = () => {
  const [inputsearch, setInputSearch] = useState("");
  return (
    <>
      <div className="header">
        <div className="header-left">
          <MenuIcon />
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/youtube/youtube_PNG13.png"
              alt="youtube logo"
              className="header-logo"
            />
          </Link>
        </div>
        <div className="header-center">
          <input
            type="text"
            value={inputsearch}
            onChange={(e) => setInputSearch(e.target.value)}
            placeholder="Search"
            className="header-input"
          />
          <SearchIcon className="header-input-button" />
        </div>
        <div className="header-right">
          <VideoCallIcon className="header-icon" />
          <AppsIcon className="header-icon" />
          <NotificationsIcon className="header-icon" />
          <Avatar
            className="header-icon"
            alt="logo"
            src="https://yt3.ggpht.com/a-/AOh14GgXyxOj0mEm_dzhgR96ZpiPvuzFhrk9RgDiCcW3Kg=s88-c-k-c0xffffffff-no-rj-mo"
          />
        </div>
      </div>
    </>
  );
};
export default Header;
