import React from "react";
import SidebarIcon from "./SidebarIcon";
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarIcon selected Icon={HomeIcon} title="Home" />
      <SidebarIcon Icon={WhatshotIcon} title="Pending" />
      <SidebarIcon Icon={SubscriptionsIcon} title="Subscriptions" />
      <hr />
      <SidebarIcon Icon={VideoLibraryIcon} title="Library" />
      <SidebarIcon Icon={HistoryIcon} title="Hostory" />
      <SidebarIcon Icon={OndemandVideoIcon} title="Your Videos" />
      <SidebarIcon Icon={WatchLaterIcon} title="Watch Later" />
      <SidebarIcon Icon={ThumbUpAltIcon} title="Liked Videos" />
      <SidebarIcon Icon={ExpandMoreIcon} title="Show More" />
      <hr />
    </div>
  );
};
export default Sidebar;
