"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface Props {
  title: string;
  about: string;
  time: string;
  video: string;
  date: string;
  autoPlay?: boolean;
  slug?: string;
}

export const VideoCard = ({
  about,
  date,
  time,
  title,
  video,
  autoPlay = false,
  slug,
}: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.src = "";
        videoRef.current.load();
      }
    };
  }, []);

  const videoHoverHandler = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const videoLeaveHandler = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="group relative col-span-12 cursor-pointer sm:col-span-6 lg:col-span-4 2xl:col-span-3">
      <div
        className="relative aspect-[16/9]"
        onMouseEnter={videoHoverHandler}
        onMouseLeave={videoLeaveHandler}
      >
        <div className="absolute top-0 left-0 w-full">
          <video
            ref={videoRef}
            className="aspect-[16/9] w-full object-cover object-center"
            autoPlay={autoPlay}
            loop={true}
            muted
            src={video}
            playsInline
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="mt-1 flex flex-row gap-x-2 uppercase">
        <div className="text-semibold text-bold flex w-1/2 flex-col font-semibold">
          {title}
          <span className="relative opacity-30">
            <span className="absolute top-0 left-0 whitespace-nowrap transition-opacity duration-500 group-hover:opacity-0">
              {" "}
              [ {about} ]{" "}
            </span>
            <span className="absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {time}
            </span>
          </span>
        </div>
        <div className="w-1/2 font-semibold">{date}</div>
      </div>
    </div>
  );
};
