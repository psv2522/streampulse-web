'use client'
import { useRef, useEffect } from "react";
import dynamic from "next/dynamic";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const Torrent = dynamic(
    () => import("@/components/torrent"),
    {
      ssr: false,
    },
  );

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Torrent/>
      {/* <video
        ref={videoRef}
        className="w-full max-w-lg mb-4 border-2 border-gray-300"
        controls
        autoPlay
        loop
        preload="metadata"
      >
        <source src="/sample-10s.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="flex space-x-4">
        <button
          onClick={handlePlay}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Play
        </button>
        <button
          onClick={handlePause}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Pause
        </button>
      </div>
    </div>
  );
}
