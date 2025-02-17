"use client";

import React, { useState } from "react";
import ReactPlayer from "react-player";
import Image from "next/image";
import { Box } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

interface VideoPlayerProps {
  url: string;
  thumbnail: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, thumbnail }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: "100%",
        borderRadius: 8,
        overflow: "hidden",
        cursor: "pointer",
      }}
      onClick={() => setIsPlaying(true)}
    >
      {isPlaying ? (
        <ReactPlayer
          url={url}
          width={"100%"}
          height={"100%"}
          controls
          playing
        />
      ) : (
        <Box sx={{ position: "relative" }}>
          {/* Custom Thumbnail Image */}
          <Image
            src={require("../../public/images/video.png")}
            alt="Video Thumbnail"
            width={1920}
            height={1080}
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          />
          {/* Play Button Overlay */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "120px",
              height: "120px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PlayCircleOutlineIcon sx={{ color: "#fff", fontSize: 100 }} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default VideoPlayer;
