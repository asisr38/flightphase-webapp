"use client";

import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Update play state when video ends
  useEffect(() => {
    const video = videoRef.current;
    const handleEnded = () => setIsPlaying(false);

    video?.addEventListener("ended", handleEnded);
    return () => video?.removeEventListener("ended", handleEnded);
  }, []);

  return (
    <div className="aspect-video bg-neutral-800 relative group">
      <video
        ref={videoRef}
        src="/flightphase-promo.webm"
        className="absolute inset-0 w-full h-full object-cover"
        playsInline
        muted={isMuted}
        loop
      />

      {/* Overlay that shows on hover or when paused */}
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Center play/pause button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`w-20 h-20 rounded-full bg-blue-500/90 flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-all transform hover:scale-105 duration-200 ${
            isPlaying
              ? "opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100"
              : "opacity-100 scale-100"
          }`}
          onClick={togglePlay}
        >
          {isPlaying ? (
            <Pause className="h-10 w-10 text-white" />
          ) : (
            <Play className="h-10 w-10 text-white ml-1" />
          )}
        </div>
      </div>

      {/* Bottom controls bar */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center justify-between">
          <button
            onClick={togglePlay}
            className="text-white hover:text-blue-400 transition-colors"
          >
            {isPlaying ? (
              <Pause className="h-6 w-6" />
            ) : (
              <Play className="h-6 w-6" />
            )}
          </button>

          <button
            onClick={toggleMute}
            className="text-white hover:text-blue-400 transition-colors"
          >
            {isMuted ? (
              <VolumeX className="h-6 w-6" />
            ) : (
              <Volume2 className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
