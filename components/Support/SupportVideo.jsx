"use client";
import React, { useState } from "react";

const SupportVideo = ({terms}) => {
  console.log(terms ,"debde")
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <div className="supportFixedTextBox">
        <div className="termos" dangerouslySetInnerHTML={{ __html: terms?.content }}></div>
      </div>

      <div
        style={{
          width: "74rem",
          height: "41.7rem",
          flexShrink: 0,
          overflow: "hidden",
          borderRadius: "0.5rem",
          position: "relative",
          boxShadow: "0 2rem 4rem rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
          margin: "2.7rem 0 7.2rem",
        }}
        onClick={() => setIsPlaying(true)}
      >
        {!isPlaying ? (
          <>
            <img
              // src="/images/videoCover.png"
              src={terms.video_cover}
              alt="Video Cover"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                userSelect: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "#867493",
                mixBlendMode: "multiply",
                pointerEvents: "none",
              }}
            />
            <img
              src="/icons/play.svg"
              alt="Play Icon"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "7.2rem", // İkonun ölçüsünü istəyə görə dəyişə bilərsən
                height: "7.2rem",
                pointerEvents: "none", // Klik üçün problem yaratmasın
                userSelect: "none",
              }}
            />
          </>
        ) : (
          <iframe
            width="100%"
            height="100%"
            // src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              // src={terms.video_url}
              src={terms.video_url.replace("watch?v=", "embed/")}

            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ display: "block" }}
          />
        )}
      </div>
    </div>
  );
};

export default SupportVideo;


















