import React from "react";

function VideoDetails({ video, loading }) {
  if (!video) {
    return "Loading.......";
  }

  let videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <iframe
        width="100%"
        height="490px"
        src={videoUrl}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="true"
      />
      <h1>{video.snippet.title}</h1>
      <p>{video.snippet.description}</p>
    </div>
  );
}

export default VideoDetails;
