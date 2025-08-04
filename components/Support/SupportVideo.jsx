// import React from "react";

// const SupportVideo = () => {
//   return (
//     <div>
//       <div className="supportFixedTextBox">
//         <p>
//           The English version of legal agreements and policies is considered as
//           the only current and valid version of this document. Any translated
//           version is provided for your convenience only, to facilitate reading
//           and understanding of the English version. Any translated versions are
//           not legally binding and cannot replace the English versions. In the
//           event of disagreement or conflict, the English language legal
//           agreements and policies shall prevail.
//         </p>
//       </div>

//       <div
//         style={{
//           width: "74rem",
//           height: "41.7rem",
//           flexShrink: 0,
//           overflow: "hidden",
//           borderRadius: "1rem", // istəyə görə
//         }}
//       >
//         <iframe
//           width="100%"
//           height="100%"
//           src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//           title="YouTube video player"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           allowFullScreen
//           style={{ display: "block" }}
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default SupportVideo;













"use client";
import React, { useState } from "react";

const SupportVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <div className="supportFixedTextBox">
        <p>
          The English version of legal agreements and policies is considered as
          the only current and valid version of this document. Any translated
          version is provided for your convenience only, to facilitate reading
          and understanding of the English version. Any translated versions are
          not legally binding and cannot replace the English versions. In the
          event of disagreement or conflict, the English language legal
          agreements and policies shall prevail.
        </p>
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
              src="/images/videoCover.png"
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
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
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



















// "use client";
// import React, { useState } from "react";

// const SupportVideo = () => {
//   const [isPlaying, setIsPlaying] = useState(false);

//   return (
//     <div>
//       <div className="supportFixedTextBox">
//         <p>
//           The English version of legal agreements and policies is considered as
//           the only current and valid version of this document. Any translated
//           version is provided for your convenience only, to facilitate reading
//           and understanding of the English version. Any translated versions are
//           not legally binding and cannot replace the English versions. In the
//           event of disagreement or conflict, the English language legal
//           agreements and policies shall prevail.
//         </p>
//       </div>

//       <div
//         style={{
//           width: "74rem",
//           height: "41.7rem",
//           flexShrink: 0,
//           overflow: "hidden",
//           borderRadius: "1rem",
//           position: "relative",
//           boxShadow: "0 2rem 4rem rgba(0, 0, 0, 0.1)",
//           cursor: "pointer",
//         }}
//         onClick={() => setIsPlaying(true)}
//       >
//         {!isPlaying ? (
//           <img
//             src="/images/videoCover.png"
//             alt="Video Cover"
//             style={{
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//               display: "block",
//               userSelect: "none",
//             }}
//           />
//         ) : (
//           <iframe
//             width="100%"
//             height="100%"
//             src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowFullScreen
//             style={{ display: "block" }}
//           ></iframe>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SupportVideo;
