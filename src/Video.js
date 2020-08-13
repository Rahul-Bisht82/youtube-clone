import React from "react";
import { Avatar } from "@material-ui/core";

function VideoCard({ image, title, channel, views, timestamp, channelimage }) {
  return (
    <div className="videocard">
      <img className="videocard-thumbnail" src={image} alt="image" />
      <div className="videocard-info">
        <Avatar className="videocard-avatar" alt={channel} src={channelimage} />

        <div className="videocard-text">
          <h4>{title}</h4>
          <p>{channel}</p>

          <p>
            {views} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
