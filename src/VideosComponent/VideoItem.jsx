import React from "react";
import "./video.style.css";

//manipulate time and date
import Moment from "react-moment";
import "moment-timezone";

function VideoItem({ video, onSelectedVideo }) {
  // console.log(onSelectedVideo);
  // console.log(video.snippet);
  return (
    <div className="videoList" onClick={() => onSelectedVideo(video)}>
      <div className="videoBlocks_img">
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
      </div>
      <div className="videoBlock_description">
        <h3>{video.snippet.title}</h3>
        <p className="channel_title">
          {video.snippet.channelTitle}
          <span style={{ margin: "0px 5px" }}>
            <Moment fromNow ago>
              {video.snippet.publishTime}
            </Moment>
            <span>Ago</span>
          </span>
        </p>

        {/* <p className="description">{video.snippet.description}</p> */}
      </div>
    </div>
  );
}

export default VideoItem;
