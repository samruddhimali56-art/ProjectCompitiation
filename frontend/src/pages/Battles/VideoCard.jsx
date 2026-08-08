import React from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video }) => {
  const navigate = useNavigate();

  const openVideo = () => {
    navigate(`/battles/video/${video.slug}`, {
      state: {
        video: video,
      },
    });
  };

  return (
    <article className="video-card">

      {/* VIDEO AREA */}
      <div className="video-thumbnail">

        {/* Actual video - paused by default */}
        <video
          className="card-video"
          src={video.video}
          preload="auto"
          muted
          playsInline
        />

        {/* Dark overlay */}
        <div className="video-overlay"></div>

        {/* Play button */}
        <button
          className="play-button"
          onClick={openVideo}
          type="button"
          aria-label={`Play ${video.title}`}
        >
          ▶
        </button>

        {/* Year */}
        <span className="battle-year">
          {video.year}
        </span>

      </div>

      {/* VIDEO CONTENT */}
      <div className="video-card-content">

        <h3>
          {video.title}
        </h3>

        <p>
          {video.description}
        </p>

        <button
          className="watch-btn"
          onClick={openVideo}
          type="button"
        >
          Watch Animation →
        </button>

      </div>

    </article>
  );
};

export default VideoCard;