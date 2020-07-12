import React from "react";
import VideoItem from "./VideoItem";

function VideoList({ videos, onSelectedVideo }) {
  // console.log(videos);
  // console.log(onSelectedVideo);
  const renderVideos = videos.map((vid) => {
    return (
      <VideoItem
        video={vid}
        key={vid.id.videoId}
        onSelectedVideo={onSelectedVideo}
      />
    );
  });
  return <div>{renderVideos}</div>;
}

export default VideoList;
