"use client";

import { cn } from "@/lib/utils";
import { Pause, Play } from "lucide-react";
import { useRef, useState } from "react";

interface Props {
  title: string;
  about: string;
  time: string;
  video: string;
  slug: string;
  date: string;
}

export const VideoPage = ({ title, about, time, video, slug, date }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="item-center relative flex w-full justify-center px-2 py-20 md:py-28">
      <div className="relative mx-auto max-w-7xl">
        <div className="relative aspect-video w-full">
          <video
            ref={videoRef}
            src={video}
            className="h-full w-full object-cover"
            loop={true}
            muted={true}
            playsInline={true}
            preload="metadata"
          />

          <div
            className={cn(
              "absolute inset-0 z-10 flex items-center justify-center",
              videoRef && "opacity-0 transition-opacity hover:opacity-100",
            )}
          >
            <div
              onClick={handlePlayVideo}
              className="flex cursor-pointer flex-col items-center justify-center gap-2 text-white transition-opacity hover:opacity-80"
            >
              {isPlaying ? (
                <>
                  <Pause className="size-12" fill="white" />
                  <span className="text-sm whitespace-nowrap uppercase">
                    [ Pause ]
                  </span>
                </>
              ) : (
                <>
                  <Play className="size-12" fill="white" />
                  <span className="text-sm whitespace-nowrap uppercase">
                    [ Play ]
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-12 gap-x-2">
          <div className="col-span-6 flex flex-col uppercase md:col-span-6">
            <span className="font-semibold">{title}</span>
            <span className="text-sm opacity-70">{about}</span>
          </div>
          <div className="col-span-6 flex justify-end md:col-span-6">
            <span className="text-sm">[ {time} ]</span>
          </div>
        </div>
      </div>
    </div>
  );
};
