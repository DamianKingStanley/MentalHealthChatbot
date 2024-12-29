import React from "react";
import "./YouTubeStatic.css"; // Ensure you have this CSS file for styling

const YouTubeStatic = () => {
  // Array of YouTube video URLs with embed format
  const videos = [
    {
      title: "We all Have Mental Health",
      url: "https://www.youtube.com/embed/DxIDKZHW3-E", // Updated to embed URL
    },
    {
      title: "Are you okay? | Award-Winning Short Film",
      url: "https://www.youtube.com/embed/tJsGGsPNakw", // Updated to embed URL
    },
    {
      title: "How to manage your mental health | Leon Taylor | TEDxClapham",
      url: "https://www.youtube.com/embed/rkZl2gsLUp4", // Updated to embed URL
    },
    // Add more videos as needed
  ];

  return (
    <div className="youtube-static">
      <h2>Featured Videos</h2>
      <div className="video-gallery">
        {videos.map((video, index) => (
          <div key={index} className="video-item">
            <iframe
              width="560"
              height="315"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="video-title">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeStatic;
