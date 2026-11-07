import React, { useEffect, useState } from "react";
import API from "../../api/axios";
import VideoCard from "./VideoCard";

const BattleVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBattles();
  }, []);

  const fetchBattles = async () => {
    try {
      setLoading(true);

      const { data } = await API.get("/battles");

      setVideos(data);
    } catch (error) {
      console.error("Error fetching battles:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="videos-section" id="battle-videos">
      <div className="section-header">
        <p className="section-label">
          VISUAL STORIES
        </p>

        <h2>
          Battles Through
          <span> Cinematic Stories</span>
        </h2>

        <p className="section-description">
          Watch powerful stories of courage,
          strategy and leadership through
          historical videos.
        </p>
      </div>

      {loading ? (
        <h2 style={{ textAlign: "center" }}>Loading...</h2>
      ) : (
        <div className="videos-grid">
          {videos.map((video) => (
            <VideoCard
              key={video._id}
              video={video}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default BattleVideos;