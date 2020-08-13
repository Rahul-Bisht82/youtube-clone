import React from "react";

function SidebarIcon({ selected, Icon, title }) {
  return (
    <div className={`sidebaricon ${selected && "selected"} `}>
      <Icon className="sidebaricon-icon " />
      <h2 className="sidebaricon-title">{title}</h2>
    </div>
  );
}

export default SidebarIcon;
